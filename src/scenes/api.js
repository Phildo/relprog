var ndomain = function()
{
  var n = new domain();
  n.id = cur_domain_id++;
  domains.push(n);
  return n;
}
var gdomain = function(id)
{
  for(var i = 1; i < domains.length; i++)
    if(domains[i].id == id) return domains[i];
  return domains[0];
}
var ddomain = function(o)
{
  for(var i = 1; i < domains.length; i++)
    if(domains[i] == o) domains.splice(i,1);
  for(var i = 1; i < groups.length; i++)
    if(groups[i].domain == o.id) groups[i].domain = 0;
}
var ngroup = function()
{
  var n = new group();
  n.id = cur_group_id++;
  n.color = rand_color();
  groups.push(n);
  return n;
}
var ggroup = function(id)
{
  for(var i = 1; i < groups.length; i++)
    if(groups[i].id == id) return groups[i];
  return groups[0];
}
var dgroup = function(o)
{
  for(var i = 1; i < groups.length; i++)
    if(groups[i] == o) groups.splice(i,1);
  for(var i = 1; i < group_annotations.length; i++)
    if(group_annotations[i].group == o.id) dgroup_annotation(group_annotations[i--]);
  for(var i = 1; i < group_transitions.length; i++)
    if(group_transitions[i].group == o.id) dgroup_transition(group_transitions[i--]);
  for(var i = 1; i < object_transitions.length; i++)
    if(object_transitions[i].group == o.id) object_transitions[i].group = 0;
}
var nobject = function()
{
  var n = new object();
  n.id = cur_object_id++;
  n.color = rand_color();
  objects.push(n);
  return n;
}
var gobject = function(id)
{
  for(var i = 1; i < objects.length; i++)
    if(objects[i].id == id) return objects[i];
  return objects[0];
}
var dobject = function(o)
{
  for(var i = 1; i < objects.length; i++)
    if(objects[i] == o) objects.splice(i,1);
  for(var i = 1; i < object_annotations.length; i++)
    if(object_annotations[i].object == o.id) dobject_annotation(object_annotations[i--]);
  for(var i = 1; i < object_transitions.length; i++)
    if(object_transitions[i].object == o.id) dobject_transition(object_transitions[i--]);
}
var nannotation = function()
{
  var n = new annotation();
  n.id = cur_annotation_id++;
  n.color = rand_color();
  annotations.push(n);
  return n;
}
var gannotation = function(id)
{
  for(var i = 1; i < annotations.length; i++)
    if(annotations[i].id == id) return annotations[i];
  return annotations[0];
}
var dannotation = function(o)
{
  for(var i = 1; i < annotations.length; i++)
    if(annotations[i] == o) annotations.splice(i,1);
}
var ngroup_annotation = function()
{
  var n = new group_annotation();
  n.id = cur_group_annotation_id++;
  n.color = rand_color();
  group_annotations.push(n);
  return n;
}
var ggroup_annotation = function(id)
{
  for(var i = 1; i < group_annotations.length; i++)
    if(group_annotations[i].id == id) return group_annotations[i];
  return group_annotations[0];
}
var dgroup_annotation = function(o)
{
  for(var i = 1; i < group_annotations.length; i++)
    if(group_annotations[i] == o) group_annotations.splice(i,1);
}
var nobject_annotation = function()
{
  var n = new object_annotation();
  n.id = cur_object_annotation_id++;
  n.color = rand_color();
  object_annotations.push(n);
  return n;
}
var gobject_annotation = function(id)
{
  for(var i = 1; i < object_annotations.length; i++)
    if(object_annotations[i].id == id) return object_annotations[i];
  return object_annotations[0];
}
var dobject_annotation = function(o)
{
  for(var i = 1; i < object_annotations.length; i++)
    if(object_annotations[i] == o) object_annotations.splice(i,1);
}
var ngroup_transition = function()
{
  var n = new group_transition();
  n.id = cur_group_transition_id++;
  group_transitions.push(n);
  return n;
}
var ggroup_transition = function(id)
{
  for(var i = 1; i < group_transitions.length; i++)
    if(group_transitions[i].id == id) return group_transitions[i];
  return group_transitions[0];
}
var dgroup_transition = function(o)
{
  for(var i = 1; i < group_transitions.length; i++)
    if(group_transitions[i] == o) group_transitions.splice(i,1);
}
var nobject_transition = function()
{
  var n = new object_transition();
  n.id = cur_object_transition_id++;
  object_transitions.push(n);
  return n;
}
var gobject_transition = function(id)
{
  for(var i = 1; i < object_transitions.length; i++)
    if(object_transitions[i].id == id) return object_transitions[i];
  return object_transitions[0];
}
var dobject_transition = function(o)
{
  for(var i = 1; i < object_transitions.length; i++)
    if(object_transitions[i] == o) object_transitions.splice(i,1);
}
var ncamera_target = function()
{
  var n = new camera_target();
  n.id = cur_camera_target_id++;
  camera_targets.push(n);
  return n;
}
var gcamera_target = function(id)
{
  for(var i = 1; i < camera_targets.length; i++)
    if(camera_targets[i].id == id) return camera_targets[i];
  return camera_targets[0];
}
var dcamera_target = function(o)
{
  for(var i = 1; i < camera_targets.length; i++)
    if(camera_targets[i] == o) camera_targets.splice(i,1);
}

