var domains;
var groups;
var objects;
var annotations;
var group_annotations;
var object_annotations;
var group_transitions;
var object_transitions;

var cur_domain_id;
var cur_group_id;
var cur_object_id;
var cur_annotation_id;
var cur_group_annotation_id;
var cur_object_annotation_id;
var cur_group_transition_id;
var cur_object_transition_id;

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

  domains            = [ndomain()];
  groups             = [ngroup()];
  objects            = [nobject()];
  annotations        = [nannotation()];
  group_annotations  = [ngroup_annotation()];
  object_annotations = [nobject_annotation()];
  group_transitions  = [ngroup_transition()];
  object_transitions = [nobject_transition()];
}
resetState();

