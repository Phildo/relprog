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
  }

  self.ready = function()
  {
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
    c_editor.draw();
  };

  self.cleanup = function()
  {
    if(clicker) clicker.detach();
    if(hoverer) hoverer.detach();
  };

};

