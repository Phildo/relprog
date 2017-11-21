var ENUM;

ENUM = 0;
var CONTENT_ENUM_NONE              = ENUM; ENUM++;
var CONTENT_ENUM_DOMAIN            = ENUM; ENUM++;
var CONTENT_ENUM_GROUP             = ENUM; ENUM++;
var CONTENT_ENUM_OBJECT            = ENUM; ENUM++;
var CONTENT_ENUM_ANNOTATION        = ENUM; ENUM++;
var CONTENT_ENUM_GROUP_ANNOTATION  = ENUM; ENUM++;
var CONTENT_ENUM_OBJECT_ANNOTATION = ENUM; ENUM++;
var CONTENT_ENUM_GROUP_TRANSITION  = ENUM; ENUM++;
var CONTENT_ENUM_OBJECT_TRANSITION = ENUM; ENUM++;
var CONTENT_ENUM_CAMERA_TARGET     = ENUM; ENUM++;
var CONTENT_ENUM_COUNT             = ENUM; ENUM++;

ENUM = 0;
var TRANSITION_DIRECTION_ENUM_NONE = ENUM; ENUM++;
var TRANSITION_DIRECTION_ENUM_IN   = ENUM; ENUM++;
var TRANSITION_DIRECTION_ENUM_OUT  = ENUM; ENUM++;

ENUM = 0;
var VIZ_ENUM_NONE     = ENUM; ENUM++;
var VIZ_ENUM_COLOR    = ENUM; ENUM++;
var VIZ_ENUM_SPACIAL  = ENUM; ENUM++;
var VIZ_ENUM_TEMPORAL = ENUM; ENUM++;
var VIZ_ENUM_TAG      = ENUM; ENUM++;
var VIZ_ENUM_COUNT    = ENUM; ENUM++;

ENUM = 0;
var TRANSITION_ENUM_NONE      = ENUM; ENUM++;
var TRANSITION_ENUM_POP       = ENUM; ENUM++;
var TRANSITION_ENUM_LERP      = ENUM; ENUM++;
var TRANSITION_ENUM_EASE_IN   = ENUM; ENUM++;
var TRANSITION_ENUM_EASE_OUT  = ENUM; ENUM++;
var TRANSITION_ENUM_EASE_BOTH = ENUM; ENUM++;
var TRANSITION_ENUM_FADE      = ENUM; ENUM++;
var TRANSITION_ENUM_BOUNCE    = ENUM; ENUM++;
var TRANSITION_ENUM_COUNT     = ENUM; ENUM++;

ENUM = 0;
var TARGET_ENUM_NONE        = ENUM; ENUM++;
var TARGET_ENUM_ASPECT_FIT  = ENUM; ENUM++;
var TARGET_ENUM_ASPECT_FILL = ENUM; ENUM++;
var TARGET_ENUM_STRETCH     = ENUM; ENUM++;
var TARGET_ENUM_COUNT       = ENUM; ENUM++;

var domain = function()
{
  var self = this;
  self.id = 0;
  self.name = "";
  self.mutex = 1;
  self.directed = 0;
  self.t_one_to_one = 0;
  self.viz = VIZ_ENUM_NONE;
  self.cached_valid = 0;
}

var group = function()
{
  var self = this;
  self.id = 0;
  self.domain = 0;
  self.seq = 0;
  self.name = "";
  self.color = 0;
  self.img = 0;
  self.wx = 0;
  self.wy = 0;
  self.cached_valid = 0;
}

var object = function()
{
  var self = this;
  self.id = 0;
  self.name = "";
  self.color = 0;
  self.img = 0;
  self.cached_valid = 0;
}

var annotation = function()
{
  var self = this;
  self.id = 0;
  self.name = "";
  self.t = 0;
  self.color = 0;
  self.img = 0;
  self.cached_valid = 0;
}

var group_annotation = function()
{
  var self = this;
  self.id = 0;
  self.group = 0;
  self.name = "";
  self.t = 0;
  self.color = 0;
  self.img = 0;
  self.cached_valid = 0;
}

var object_annotation = function()
{
  var self = this;
  self.id = 0;
  self.object = 0;
  self.name = "";
  self.t = 0;
  self.color = 0;
  self.img = 0;
  self.cached_valid = 0;
}

var group_transition = function()
{
  var self = this;
  self.id = 0;
  self.group = 0;
  self.direction = TRANSITION_DIRECTION_ENUM_NONE;
  self.name = "";
  self.t = 0;
  self.transition = TRANSITION_ENUM_NONE;
  self.cached_valid = 0;
}

var object_transition = function()
{
  var self = this;
  self.id = 0;
  self.object = 0;
  self.group = 0;
  self.direction = TRANSITION_DIRECTION_ENUM_NONE;
  self.name = "";
  self.t = 0;
  self.transition = TRANSITION_ENUM_NONE;
  self.cached_valid = 0;
}

var camera_target = function()
{
  var self = this;
  self.id = 0;
  self.wx = 0;
  self.wy = 0;
  self.ww = 1;
  self.wh = 1;
  self.t = 0;
  self.target = TARGET_ENUM_NONE;
  self.transition = TRANSITION_ENUM_NONE;
  self.cached_valid = 0;
}

