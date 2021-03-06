var domains;            var cur_domain_id;            var domains_cached_valid;
var groups;             var cur_group_id;             var groups_cached_valid;
var objects;            var cur_object_id;            var objects_cached_valid;
var annotations;        var cur_annotation_id;        var annotations_cached_valid;
var group_annotations;  var cur_group_annotation_id;  var group_annotations_cached_valid;
var object_annotations; var cur_object_annotation_id; var object_annotations_cached_valid;
var group_transitions;  var cur_group_transition_id;  var group_transitions_cached_valid;
var object_transitions; var cur_object_transition_id; var object_transitions_cached_valid;
var camera_targets;     var cur_camera_target_id;     var camera_targets_cached_valid;

var list_for_content = function(type)
{
  switch(type)
  {
    case CONTENT_ENUM_DOMAIN:            return domains;            break;
    case CONTENT_ENUM_GROUP:             return groups;             break;
    case CONTENT_ENUM_OBJECT:            return objects;            break;
    case CONTENT_ENUM_ANNOTATION:        return annotations;        break;
    case CONTENT_ENUM_GROUP_ANNOTATION:  return group_annotations;  break;
    case CONTENT_ENUM_OBJECT_ANNOTATION: return object_annotations; break;
    case CONTENT_ENUM_GROUP_TRANSITION:  return group_transitions;  break;
    case CONTENT_ENUM_OBJECT_TRANSITION: return object_transitions; break;
    case CONTENT_ENUM_CAMERA_TARGET:     return camera_targets;     break;
  }
}

var domain_groups_cached; //groups grouped by domain
//missing //group_transitions sorted by t
var group_transitions_cached; //group_transitions grouped by group, sorted by t, validated
//missing //object_transitions sorted by t
var object_transitions_cached; //object_transitions grouped by object, sorted by t
//missing //object_transitions grouped by group, sorted by t
var group_object_transitions_cached; //object_transitions grouped by group/object, sorted by t, validated

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
  d.t_one_to_one = 0;
  d.viz = VIZ_ENUM_SPACIAL;

  d = ndomain();
  d.name = "Time";
  d.mutex = 1;
  d.directed = 1;
  d.t_one_to_one = 1;
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
  for(var i = 0; i < domains.length;            i++) domains[i].cached_i            = i;
  for(var i = 0; i < groups.length;             i++) groups[i].cached_i             = i;
  for(var i = 0; i < objects.length;            i++) objects[i].cached_i            = i;
  for(var i = 0; i < annotations.length;        i++) annotations[i].cached_i        = i;
  for(var i = 0; i < group_annotations.length;  i++) group_annotations[i].cached_i  = i;
  for(var i = 0; i < object_annotations.length; i++) object_annotations[i].cached_i = i;
  for(var i = 0; i < group_transitions.length;  i++) group_transitions[i].cached_i  = i;
  for(var i = 0; i < object_transitions.length; i++) object_transitions[i].cached_i = i;
  for(var i = 0; i < camera_targets.length;     i++) camera_targets[i].cached_i     = i;

  spacial_domain  = 0;
  temporal_domain = 0;
  for(var i = 0; i < domains.length; i++)
  {
    if(domains[i].viz == VIZ_ENUM_SPACIAL)  spacial_domain  = i;
    if(domains[i].viz == VIZ_ENUM_TEMPORAL) temporal_domain = i;
  }

  t_breadth = 0;
  for(var i = 0; i < annotations.length;        i++) if(annotations[i].t        > t_breadth) t_breadth = annotations[i].t;
  for(var i = 0; i < group_annotations.length;  i++) if(group_annotations[i].t  > t_breadth) t_breadth = group_annotations[i].t;
  for(var i = 0; i < object_annotations.length; i++) if(object_annotations[i].t > t_breadth) t_breadth = object_annotations[i].t;
  for(var i = 0; i < group_transitions.length;  i++) if(group_transitions[i].t  > t_breadth) t_breadth = group_transitions[i].t;
  for(var i = 0; i < object_transitions.length; i++) if(object_transitions[i].t > t_breadth) t_breadth = object_transitions[i].t;
  for(var i = 0; i < camera_targets.length;     i++) if(camera_targets[i].t     > t_breadth) t_breadth = camera_targets[i].t;

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

  domains_cached_valid = 1;
  for(var i = 1; i < domains.length; i++)
  {
    domains[i].cached_valid = 1;
    if(!domains[i].name || domains[i].name == "") domains[i].cached_valid = 0;
    if(!domains[i].cached_valid) domains_cached_valid = 0;
  }
  groups_cached_valid = 1;
  for(var i = 1; i < groups.length; i++)
  {
    groups[i].cached_valid = 1;
    if(!groups[i].name || groups[i].name == "") groups[i].cached_valid = 0;
    if(groups[i].domain == 0) groups[i].cached_valid = 0;
    if(!domains[i].cached_valid) groups_cached_valid = 0;
  }
  objects_cached_valid = 1;
  for(var i = 1; i < objects.length; i++)
  {
    objects[i].cached_valid = 1;
    if(!objects[i].name || objects[i].name == "") objects[i].cached_valid = 0;
    if(!domains[i].cached_valid) objects_cached_valid = 0;
  }
  annotations_cached_valid = 1;
  for(var i = 1; i < annotations.length; i++)
  {
    annotations[i].cached_valid = 1;
    if(!annotations[i].name || annotations[i].name == "") annotations[i].cached_valid = 0;
    if(!domains[i].cached_valid) annotations_cached_valid = 0;
  }
  group_annotations_cached_valid = 1;
  for(var i = 1; i < group_annotations.length; i++)
  {
    group_annotations[i].cached_valid = 1;
    if(!group_annotations[i].name || group_annotations[i].name == "") group_annotations[i].cached_valid = 0;
    if(group_annotations[i].group == 0) group_annotations[i].cached_valid = 0;
    if(!domains[i].cached_valid) group_annotations_cached_valid = 0;
  }
  object_annotations_cached_valid = 1;
  for(var i = 1; i < object_annotations.length; i++)
  {
    object_annotations[i].cached_valid = 1;
    if(!object_annotations[i].name || object_annotations[i].name == "") object_annotations[i].cached_valid = 0;
    if(object_annotations[i].object == 0) object_annotations[i].cached_valid = 0;
    if(!domains[i].cached_valid) object_annotations_cached_valid = 0;
  }
  group_transitions_cached_valid = 1;
  for(var i = 1; i < group_transitions.length; i++)
  {
    group_transitions[i].cached_valid = 1;
    //if(!group_transitions[i].name || group_transitions[i].name == "") group_transitions[i].cached_valid = 0;
    if(group_transitions[i].group == 0) group_transitions[i].cached_valid = 0;
    if(!domains[i].cached_valid) group_transitions_cached_valid = 0;
  }
  object_transitions_cached_valid = 1;
  for(var i = 1; i < object_transitions.length; i++)
  {
    object_transitions[i].cached_valid = 1;
    //if(!object_transitions[i].name || object_transitions[i].name == "") object_transitions[i].cached_valid = 0;
    if(object_transitions[i].object == 0) object_transitions[i].cached_valid = 0;
    if(object_transitions[i].group == 0) object_transitions[i].cached_valid = 0;
    if(!domains[i].cached_valid) object_transitions_cached_valid = 0;
  }
  camera_targets_cached_valid = 1;
  for(var i = 1; i < camera_targets.length; i++)
  {
    camera_targets[i].cached_valid = 1;
    if(!domains[i].cached_valid) camera_targets_cached_valid = 0;
  }

  domain_groups_cached = [];
  for(var i = 0; i < domains.length; i++)
  {
    //structure
    domain_groups_cached[i] = [];
    //aggregate
    for(var j = 0; j < groups.length; j++)
    {
      if(groups[j].domain == i)
        domain_groups_cached[i].push(groups[j]);
    }
  }

  group_transitions_cached = [];
  for(var i = 0; i < groups.length; i++)
  {
    //structure
    group_transitions_cached[i] = [];
    //aggregate
    for(var j = 0; j < group_transitions.length; j++)
    {
      if(group_transitions[j].group == i)
        group_transitions_cached[i].push(group_transitions[j]);
    }
    //sort
    for(var j = 0; j < group_transitions_cached[i].length; j++)
    {
      var tmp = group_transitions_cached[i][j];
      for(var k = j+1; k < group_transitions_cached[i].length; k++)
      {
        if(group_transitions_cached[i][k].t < tmp.t)
        {
          group_transitions_cached[i][j] = group_transitions_cached[i][k];
          group_transitions_cached[i][k] = tmp;
          tmp = group_transitions_cached[i][j];
        }
      }
    }
    //validate
    var cur_in = 0;
    var last_t = -1;
    for(var j = 0; j < group_transitions_cached[i].length; j++)
    {
      var gt = group_transitions_cached[i][j];
           if(!cur_in && gt.direction == TRANSITION_DIRECTION_ENUM_OUT) gt.valid = false;
      else if( cur_in && gt.direction == TRANSITION_DIRECTION_ENUM_IN)  gt.valid = false;
      if(gt.t == last_t) { gt.valid = false; group_transitions_cached[i][j-1].valid = false; }
      if(!gt.valid)
      {
        group_transitions_cached_valid = 0;
        continue;
      }
      if(gt.direction == TRANSITION_DIRECTION_ENUM_IN)  cur_in = 1;
      if(gt.direction == TRANSITION_DIRECTION_ENUM_OUT) cur_in = 0;
    }
  }

  object_transitions_cached = [];
  for(var i = 0; i < objects.length; i++)
  {
    //structure
    object_transitions_cached[i] = [];
    //aggregate
    for(var j = 0; j < object_transitions.length; j++)
    {
      if(object_transitions[j].object == i)
        object_transitions_cached[i].push(object_transitions[j]);
    }
    //sort
    for(var j = 0; j < object_transitions_cached[i].length; j++)
    {
      var tmp = object_transitions_cached[i][j];
      for(var k = j+1; k < object_transitions_cached[i].length; k++)
      {
        if(object_transitions_cached[i][k].t < tmp.t)
        {
          object_transitions_cached[i][j] = object_transitions_cached[i][k];
          object_transitions_cached[i][k] = tmp;
          tmp = object_transitions_cached[i][j];
        }
      }
    }
  }

  group_object_transitions_cached = [];
  for(var i = 0; i < groups.length; i++)
  {
    //structure
    group_object_transitions_cached[i] = [];
    for(var j = 0; j < objects.length; j++)
      group_object_transitions_cached[i][j] = [];
    for(var j = 0; j < object_transitions.length; j++)
    {
      //aggregate
      for(var k = 0; k < groups.length; k++)
      {
        if(object_transitions[j].group == groups[k].id)
          group_object_transitions_cached[i][k].push(object_transitions[j]);
      }
      //sort
      for(var k = 0; k < group_object_transitions_cached[i][j].length; k++)
      {
        var tmp = group_object_transitions_cached[i][j][k];
        for(var l = k+1; l < group_object_transitions_cached[i][j].length; l++)
        {
          if(group_object_transitions_cached[i][j][k].t < tmp.t)
          {
            group_object_transitions_cached[i][j][k] = group_object_transitions_cached[i][j][k];
            group_object_transitions_cached[i][j][l] = tmp;
            tmp = group_object_transitions_cached[i][j][k];
          }
        }
      }
      //validate
      var cur_in = 0;
      var last_t = -1;
      for(var k = 0; k < group_object_transitions_cached[i][j].length; k++)
      {
        var ot = group_object_transitions_cached[i][j][k];
             if(!cur_in && ot.direction == TRANSITION_DIRECTION_ENUM_OUT) ot.valid = false;
        else if( cur_in && ot.direction == TRANSITION_DIRECTION_ENUM_IN)  ot.valid = false;
        if(ot.t == last_t) { ot.valid = false; group_object_transitions_cached[i][j][k-1].valid = false; }
        if(!ot.valid)
        {
          object_transitions_cached_valid = 0; //note- a general statement about object_transitions, _not_ just this grouping!
          continue;
        }
        if(ot.direction == TRANSITION_DIRECTION_ENUM_IN)  cur_in = 1;
        if(ot.direction == TRANSITION_DIRECTION_ENUM_OUT) cur_in = 0;
      }
    }
  }

}

resetState();

