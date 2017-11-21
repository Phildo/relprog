var MainScene = function(doodle, stage)
{
  var self = this;

  var canv;
  var canvas;
  var ctx;
  self.resize = function(stage)
  {
    canv = stage.canv;
    canvas = canv.canvas;
    ctx = canv.context;
  }
  self.resize(stage);

  var hoverer;
  var clicker;

  var c_editor;
  var t_editor;

  var cam;
  self.resize = function(stage)
  {
    canv = stage.canv;
    canvas = canv.canvas;
    ctx = canv.context;
    cam = {wx:0,wy:0,wh:1,ww:canv.width/canv.height};

    if(hoverer) hoverer.detach();
    if(clicker) clicker.detach();
    hoverer = new PersistentHoverer({source:canvas});
    clicker = new Clicker({source:canvas});

    c_editor.w = 200;
    c_editor.h = canv.height;
    c_editor.x = canv.width-c_editor.w;
    c_editor.y = 0;

    t_editor.w = canv.width-c_editor.w;
    //t_editor.h = ?; //let t_editor manage height
    t_editor.x = 0;
    t_editor.y = canv.height-t_editor.h;
  }

  self.ready = function()
  {
    defaultState();
    c_editor = new content_editor();
    t_editor = new timeline_editor();

    self.resize(stage);
  };

  self.tick = function()
  {
    hoverer.filter(c_editor);
    clicker.filter(c_editor);
    hoverer.filter(t_editor);
    clicker.filter(t_editor);
    hoverer.flush();
    clicker.flush();
  };

  self.draw = function()
  {
    c_editor.draw(ctx);
    t_editor.draw(ctx);
  };

  self.cleanup = function()
  {
    if(clicker) clicker.detach();
    if(hoverer) hoverer.detach();
  };

};

