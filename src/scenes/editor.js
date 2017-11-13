var content_cam;
var timeline_cam;

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

var content_editor = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  var ENUM;

  ENUM = 0;
  EDIT_MODE_ENUM_NONE       = ENUM; ENUM++;
  EDIT_MODE_ENUM_LIST       = ENUM; ENUM++;
  EDIT_MODE_ENUM_INDIVIDUAL = ENUM; ENUM++;
  EDIT_MODE_ENUM_COUNT      = ENUM; ENUM++;

  ENUM = 0;
  EDIT_TYPE_ENUM_NONE   = ENUM; ENUM++;
  EDIT_TYPE_ENUM_DOMAIN = ENUM; ENUM++;
  EDIT_TYPE_ENUM_GROUP  = ENUM; ENUM++;
  EDIT_TYPE_ENUM_OBJECT = ENUM; ENUM++;
  EDIT_TYPE_ENUM_COUNT  = ENUM; ENUM++;

  self.edit_mode = EDIT_MODE_ENUM_LIST;
  self.edit_type = EDIT_TYPE_ENUM_DOMAIN;
  self.selected = 0;

  self.hover = function(evt)
  {
    switch(self.edit_mode)
    {
      case EDIT_MODE_ENUM_LIST:
        switch(self.edit_type)
        {
          case EDIT_TYPE_ENUM_DOMAIN:
            break;
          case EDIT_TYPE_ENUM_GROUP:
            break;
          case EDIT_TYPE_ENUM_OBJECT:
            break;
        }
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case EDIT_TYPE_ENUM_DOMAIN:
            break;
          case EDIT_TYPE_ENUM_GROUP:
            break;
          case EDIT_TYPE_ENUM_OBJECT:
            break;
        }
        break;
    }
  }

  self.unhover = function(evt)
  {

  }

  self.click = function(evt)
  {
    switch(self.edit_mode)
    {
      case EDIT_MODE_ENUM_LIST:
        switch(self.edit_type)
        {
          case EDIT_TYPE_ENUM_DOMAIN:
            break;
          case EDIT_TYPE_ENUM_GROUP:
            break;
          case EDIT_TYPE_ENUM_OBJECT:
            break;
        }
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case EDIT_TYPE_ENUM_DOMAIN:
            break;
          case EDIT_TYPE_ENUM_GROUP:
            break;
          case EDIT_TYPE_ENUM_OBJECT:
            break;
        }
        break;
    }

  }

  self.draw = function()
  {
    switch(self.edit_mode)
    {
      case EDIT_MODE_ENUM_LIST:
        switch(self.edit_type)
        {
          case EDIT_TYPE_ENUM_DOMAIN:
            break;
          case EDIT_TYPE_ENUM_GROUP:
            break;
          case EDIT_TYPE_ENUM_OBJECT:
            break;
        }
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case EDIT_TYPE_ENUM_DOMAIN:
            break;
          case EDIT_TYPE_ENUM_GROUP:
            break;
          case EDIT_TYPE_ENUM_OBJECT:
            break;
        }
        break;
    }
  }

}

var drawState = function()
{

}

