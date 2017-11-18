var domains;            var cur_domain_id;            var domains_valid;
var groups;             var cur_group_id;             var groups_valid;
var objects;            var cur_object_id;            var objects_valid;
var annotations;        var cur_annotation_id;        var annotations_valid;
var group_annotations;  var cur_group_annotation_id;  var group_annotations_valid;
var object_annotations; var cur_object_annotation_id; var object_annotations_valid;
var group_transitions;  var cur_group_transition_id;  var group_transitions_valid;
var object_transitions; var cur_object_transition_id; var object_transitions_valid;
var camera_targets;     var cur_camera_target_id;     var camera_targets_valid;

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

var content_lists;

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

  domains            = []; ndomain();
  groups             = []; ngroup();
  objects            = []; nobject();
  annotations        = []; nannotation();
  group_annotations  = []; ngroup_annotation();
  object_annotations = []; nobject_annotation();
  group_transitions  = []; ngroup_transition();
  object_transitions = []; nobject_transition();
  camera_targets     = []; ncamera_target();

  calculateCacheState();
}

var defaultState = function()
{
  resetState();

  var d;

  d = ndomain();
  d.name = "Space";
  d.mutex = 1;
  d.directed = 0;
  d.viz = VIZ_ENUM_SPACIAL;

  d = ndomain();
  d.name = "Time";
  d.mutex = 1;
  d.directed = 1;
  d.viz = VIZ_ENUM_TEMPORAL;

  var c;

  c = ncamera_target();
  c.t = 1;
  c.target = TARGET_ENUM_ASPECT_FIT;
  c.transition = TRANSITION_ENUM_POP;

  calculateCacheState();
}

var calculateCacheState = function()
{
  content_lists = [];
  content_lists[CONTENT_ENUM_DOMAIN] = domains;
  content_lists[CONTENT_ENUM_GROUP]  = groups;
  content_lists[CONTENT_ENUM_OBJECT] = objects;

  spacial_domain  = 0;
  temporal_domain = 0;
  for(var i = 0; i < domains.length; i++)
  {
    if(domains[i].viz == VIZ_ENUM_SPACIAL)  spacial_domain  = i;
    if(domains[i].viz == VIZ_ENUM_TEMPORAL) temporal_domain = i;
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

  domains_valid = 1;
  for(var i = 1; i < domains.length; i++)
  {
    domains[i].valid = 1;
    if(!domains[i].name || domains[i].name == "") domains[i].valid = 0;
    if(!domains[i].valid) domains_valid = 0;
  }
  groups_valid = 1;
  for(var i = 1; i < groups.length; i++)
  {
    groups[i].valid = 1;
    if(!groups[i].name || groups[i].name == "") groups[i].valid = 0;
    if(groups[i].domain == 0) groups[i].valid = 0;
    if(!domains[i].valid) groups_valid = 0;
  }
  objects_valid = 1;
  for(var i = 1; i < objects.length; i++)
  {
    objects[i].valid = 1;
    if(!objects[i].name || objects[i].name == "") objects[i].valid = 0;
    if(!domains[i].valid) objects_valid = 0;
  }
  annotations_valid = 1;
  for(var i = 1; i < annotations.length; i++)
  {
    annotations[i].valid = 1;
    if(!annotations[i].name || annotations[i].name == "") annotations[i].valid = 0;
    if(!domains[i].valid) annotations_valid = 0;
  }
  group_annotations_valid = 1;
  for(var i = 1; i < group_annotations.length; i++)
  {
    group_annotations[i].valid = 1;
    if(!group_annotations[i].name || group_annotations[i].name == "") group_annotations[i].valid = 0;
    if(group_annotations[i].group == 0) group_annotations[i].valid = 0;
    if(!domains[i].valid) group_annotations_valid = 0;
  }
  object_annotations_valid = 1;
  for(var i = 1; i < object_annotations.length; i++)
  {
    object_annotations[i].valid = 1;
    if(!object_annotations[i].name || object_annotations[i].name == "") object_annotations[i].valid = 0;
    if(object_annotations[i].object == 0) object_annotations[i].valid = 0;
    if(!domains[i].valid) object_annotations_valid = 0;
  }
  group_transitions_valid = 1;
  for(var i = 1; i < group_transitions.length; i++)
  {
    group_transitions[i].valid = 1;
    //if(!group_transitions[i].name || group_transitions[i].name == "") group_transitions[i].valid = 0;
    if(group_transitions[i].group == 0) group_transitions[i].valid = 0;
    if(!domains[i].valid) group_transitions_valid = 0;
  }
  object_transitions_valid = 1;
  for(var i = 1; i < object_transitions.length; i++)
  {
    object_transitions[i].valid = 1;
    //if(!object_transitions[i].name || object_transitions[i].name == "") object_transitions[i].valid = 0;
    if(object_transitions[i].object == 0) object_transitions[i].valid = 0;
    if(object_transitions[i].group == 0) object_transitions[i].valid = 0;
    if(!domains[i].valid) object_transitions_valid = 0;
  }
  camera_targets_valid = 1;
  for(var i = 1; i < camera_targets.length; i++)
  {
    camera_targets[i].valid = 1;
    if(!domains[i].valid) camera_targets_valid = 0;
  }

}

resetState();

