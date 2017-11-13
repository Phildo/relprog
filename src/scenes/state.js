var domains;
var groups;
var objects;
var annotations;
var group_annotations;
var object_annotations;
var group_transitions;
var object_transitions;
var camera_targets;

var cur_domain_id;
var cur_group_id;
var cur_object_id;
var cur_annotation_id;
var cur_group_annotation_id;
var cur_object_annotation_id;
var cur_group_transition_id;
var cur_object_transition_id;
var cur_camera_target_id;

//cache state
var spacial_domain;
var temporal_domain;

var t_breadth;
var spacial_x_min;
var spacial_x_max;
var spacial_y_min;
var spacial_y_max;
var spacial_x_breadth;
var spacial_y_breadth;
var temporal_min;
var temporal_max;
var temporal_breadth;

var resetState = function()
{
  cur_domain_id            = 0;
  cur_group_id             = 0;
  cur_object_id            = 0;
  cur_annotation_id        = 0;
  cur_group_annotation_id  = 0;
  cur_object_annotation_id = 0;
  cur_group_transition_id  = 0;
  cur_object_transition_id = 0;
  cur_camera_target_id     = 0;

  domains            = [ndomain()];
  groups             = [ngroup()];
  objects            = [nobject()];
  annotations        = [nannotation()];
  group_annotations  = [ngroup_annotation()];
  object_annotations = [nobject_annotation()];
  group_transitions  = [ngroup_transition()];
  object_transitions = [nobject_transition()];
  camera_targets     = [ncamera_target()];

  calculateCacheState();
}

var defaultState = function()
{
  resetState();

  var d;

  d = ndomain();
  d.name = "Time";
  d.mutex = 1;
  d.directed = 1;
  d.viz_type = VIZ_TYPE_TIMELINE;
  domains.push(d);

  d = ndomain();
  d.name = "Space";
  d.mutex = 1;
  d.directed = 0;
  d.viz_type = VIZ_TYPE_SPACIAL;
  domains.push(d);

  var c;

  c = ncamera_target();
  c.t = 1;
  c.target = TARGET_ENUM_ASPECT_FIT;
  c.transition = TRANSITION_ENUM_POP;
  camera_targets.push(c);

  calculateCacheState();
}

var calculateCacheState = function()
{
  spacial_domain  = 0;
  temporal_domain = 0;
  for(var i = 0; i < domains.length; i++)
  {
    if(domains[i].domain == DOMAIN_ENUM_SPACIAL)  spacial_domain  = i;
    if(domains[i].domain == DOMAIN_ENUM_TEMPORAL) temporal_domain = i;
  }

  t_breadth = 0;
  for(var i = 0; i < annotations; i++)
    if(annotations.t > t_breadth) t_breadth = annotations.t;
  for(var i = 0; i < group_annotations; i++)
    if(group_annotations.t > t_breadth) t_breadth = group_annotations.t;
  for(var i = 0; i < object_annotations; i++)
    if(object_annotations.t > t_breadth) t_breadth = object_annotations.t;
  for(var i = 0; i < group_transitions; i++)
    if(group_transitions.t > t_breadth) t_breadth = group_transitions.t;
  for(var i = 0; i < object_transitions; i++)
    if(object_transitions.t > t_breadth) t_breadth = object_transitions.t;
  for(var i = 0; i < camera_targets; i++)
    if(camera_targets.t > t_breadth) t_breadth = camera_targets.t;

  spacial_x_min = 0;
  spacial_y_min = 0;
  spacial_x_max = 0;
  spacial_y_max = 0;
  spacial_x_breadth = 0;
  spacial_y_breadth = 0;
  if(spacial_domain)
  {
    for(var i = 0; i < groups; i++)
    {
      if(groups[i].domain == spacial_domain)
      {
        if(groups[i].wx < spacial_x_min) spacial_x_min = groups[i].wx;
        if(groups[i].wy < spacial_y_min) spacial_y_min = groups[i].wy;
        if(groups[i].wx > spacial_x_max) spacial_x_max = groups[i].wx;
        if(groups[i].wy > spacial_y_max) spacial_y_max = groups[i].wy;
      }
    }
    spacial_x_breadth = spacial_x_max-spacial_x_min;
    spacial_y_breadth = spacial_y_max-spacial_y_min;
  }

  temporal_min = 0;
  temporal_max = 0;
  temporal_breadth  = 0;
  if(temporal_domain)
  {
    for(var i = 0; i < groups; i++)
    {
      if(groups[i].domain == temporal_domain)
      {
        if(groups[i].seq < temporal_min) temporal_min = groups[i].seq;
        if(groups[i].seq > temporal_max) temporal_max = groups[i].seq;
      }
    }
    temporal_breadth = temporal_max-temporal_min;
  }
}

resetState();

