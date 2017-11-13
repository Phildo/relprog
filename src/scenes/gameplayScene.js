var GamePlayScene = function(game, stage)
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

  var cam;
  self.resize = function(stage)
  {
    canv = stage.canv;
    canvas = canv.canvas;
    ctx = canv.context;
    cam = {wx:0,wy:0,wh:1,ww:canv.width/canv.height};
  }
  self.resize(stage);

  self.ready = function()
  {
  };

  self.tick = function()
  {
  };

  self.draw = function()
  {
  };

  self.cleanup = function()
  {
  };

};

