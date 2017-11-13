var ENUM;
ENUM = 0;
var TRANSITION_DIRECTION_ENUM_NONE = ENUM; ENUM++;
var TRANSITION_DIRECTION_ENUM_IN   = ENUM; ENUM++;
var TRANSITION_DIRECTION_ENUM_OUT  = ENUM; ENUM++;

ENUM = 0;
var VIZ_TYPE_ENUM_NONE     = ENUM; ENUM++;
var VIZ_TYPE_ENUM_COLOR    = ENUM; ENUM++;
var VIZ_TYPE_ENUM_SPACIAL  = ENUM; ENUM++;
var VIZ_TYPE_ENUM_TIMELINE = ENUM; ENUM++;
var VIZ_TYPE_ENUM_TAG      = ENUM; ENUM++;
var VIZ_TYPE_ENUM_COUNT    = ENUM; ENUM++;

ENUM = 0;
var VIZ_ENUM_NONE   = ENUM; ENUM++;
var VIZ_ENUM_POP    = ENUM; ENUM++;
var VIZ_ENUM_SLIDE  = ENUM; ENUM++;
var VIZ_ENUM_FADE   = ENUM; ENUM++;
var VIZ_ENUM_BOUNCE = ENUM; ENUM++;
var VIZ_ENUM_COUNT  = ENUM; ENUM++;

var domain = function()
{
  var self = this;
  self.id = 0;
  self.name = "";
  self.mutex = 1;
  self.directed = 0;
  self.viz_type = VIZ_TYPE_ENUM_NONE;
}
var ndomain = function()
{
  var n = new domain();
  n.id = cur_domain_id++;
  return n;
}

var group = function()
{
  var self = this;
  self.id = 0;
  self.domain = 0;
  self.name = "";
  self.viz_param = 0;
  self.seq = 0;
}
var ngroup = function()
{
  var n = new group();
  n.id = cur_group_id++;
  return n;
}

var object = function()
{
  var self = this;
  self.id = 0;
  self.name = "";
}
var nobject = function()
{
  var n = new object();
  n.id = cur_object_id++;
  return n;
}

var annotation = function()
{
  var self = this;
  self.id = 0;
  self.name = "";
  self.t = 0;
}
var nannotation = function()
{
  var n = new annotation();
  n.id = cur_annotation_id++;
  return n;
}

var group_annotation = function()
{
  var self = this;
  self.id = 0;
  self.group = 0;
  self.name = "";
  self.t = 0;
}
var ngroup_annotation = function()
{
  var n = new group_annotation();
  n.id = cur_group_annotation_id++;
  return n;
}

var object_annotation = function()
{
  var self = this;
  self.id = 0;
  self.object = 0;
  self.name = "";
  self.t = 0;
}
var nobject_annotation = function()
{
  var n = new object_annotation();
  n.id = cur_object_annotation_id++;
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
  self.viz = VIZ_ENUM_NONE;
}
var ngroup_transition = function()
{
  var n = new group_transition();
  n.id = cur_group_transition_id++;
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
  self.viz = VIZ_ENUM_NONE;
}
var nobject_transition = function()
{
  var n = new object_transition();
  n.id = cur_object_transition_id++;
  return n;
}

var byId = function(list,id)
{
  for(var i = 1; i < list.length; i++)
    if(list[i].id == id) return list[i];
  return list[0];
}

