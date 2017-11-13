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
  self.viz = VIZ_ENUM_NONE;
}
var ndomain = function()
{
  var n = new domain();
  n.id = cur_domain_id++;
  domains.push(n);
  return n;
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
}
var ngroup = function()
{
  var n = new group();
  n.id = cur_group_id++;
  groups.push(n);
  return n;
}

var object = function()
{
  var self = this;
  self.id = 0;
  self.name = "";
  self.color = 0;
  self.img = 0;
}
var nobject = function()
{
  var n = new object();
  n.id = cur_object_id++;
  objects.push(n);
  return n;
}

var annotation = function()
{
  var self = this;
  self.id = 0;
  self.name = "";
  self.t = 0;
  self.color = 0;
  self.img = 0;
}
var nannotation = function()
{
  var n = new annotation();
  n.id = cur_annotation_id++;
  annotations.push(n);
  return n;
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
}
var ngroup_annotation = function()
{
  var n = new group_annotation();
  n.id = cur_group_annotation_id++;
  group_annotations.push(n);
  return n;
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
}
var nobject_annotation = function()
{
  var n = new object_annotation();
  n.id = cur_object_annotation_id++;
  object_annotations.push(n);
  return n;
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
}
var ngroup_transition = function()
{
  var n = new group_transition();
  n.id = cur_group_transition_id++;
  group_transitions.push(n);
  return n;
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
}
var nobject_transition = function()
{
  var n = new object_transition();
  n.id = cur_object_transition_id++;
  object_transitions.push(n);
  return n;
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
}
var ncamera_target = function()
{
  var n = new camera_target();
  n.id = cur_camera_target_id++;
  camera_targets.push(n);
  return n;
}

var byId = function(list,id)
{
  for(var i = 1; i < list.length; i++)
    if(list[i].id == id) return list[i];
  return list[0];
}

