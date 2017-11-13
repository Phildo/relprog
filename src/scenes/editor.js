
var editor = function()
{
  var self = this;
  self.text_input  = document.createElement("input");
  self.float_input = document.createElement("input");
  self.int_input   = document.createElement("input");
  self.t_input     = document.createElement("input");
  self.transition_direction_selector = document.createElement("select");
  self.viz_type_selector             = document.createElement("select");
  self.transition_selector           = document.createElement("select");
  self.target_selector               = document.createElement("select");
  self.domain_selector               = document.createElement("select");
  self.group_selector                = document.createElement("select");
  self.object_selector               = document.createElement("select");
  self.annotation_selector           = document.createElement("select");
  self.group_annotation_selector     = document.createElement("select");
  self.object_annotation_selector    = document.createElement("select");
  self.group_transition_selector     = document.createElement("select");
  self.object_transition_selector    = document.createElement("select");
  self.camera_target_selector        = document.createElement("select");
}

