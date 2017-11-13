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
    c_editor.h = canv.height;;
    c_editor.x = canv.width-c_editor.w;
    c_editor.y = 0;
  }

  self.ready = function()
  {
    defaultState();
    c_editor = new content_editor();

    self.resize(stage);
  };

  self.tick = function()
  {
    hoverer.filter(c_editor);
    clicker.filter(c_editor);
    hoverer.flush();
    clicker.flush();
  };

  self.draw = function()
  {
    c_editor.draw(ctx);
  };

  self.cleanup = function()
  {
    if(clicker) clicker.detach();
    if(hoverer) hoverer.detach();
  };

};

