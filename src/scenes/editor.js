var content_cam;
var timeline_cam;

/*
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
*/

var editable_text = function()
{
  var self = this;
}

var editable_toggle = function()
{
  var self = this;
}

var editable_viz = function()
{
  var self = this;
}

var editable_domain = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered = function(i) { }//overwrite
  self.selected = function(i) { }//overwrite

  self.properties = [];
  self.properties.push(new editable_text());   //name
  self.properties.push(new editable_toggle()); //mutex
  self.properties.push(new editable_toggle()); //directed
  self.properties.push(new editable_viz());    //viz

  self.hover = function(domain,evt)
  {
    var old_hovering_i = self.hovering_i;
    // if(!fWithin(editor.x,editor.x+editor.w,evt.doX)) return; //commented out because should be assumed
    self.hovering_i = 0;

    var off_y = 0;
    var box_y;
    box_y = editor.y+off_y;
    if(
      fWithin(box_y,box_y+editor.selection_box_h,evt.doY) &&
      fWithin(editor.x,editor.x+editor.back_btn_w,evt.doX)
    )
      self.hovering_i = -1; //back btn
    off_y += editor.selection_box_h;

    if(self.hovering_i != old_hovering_i) self.hovered(self.hovering_i);
  }

  self.click = function(domain,evt)
  {
    if(self.hovering_i == -1)
      self.selected(self.hovering_i);
  }

  self.draw = function(domain,ctx)
  {
    var off_y = 0;
    var box_y;
    box_y = editor.y+off_y;
    if(self.hovering_i == -1)
    {
      var oldStyle = ctx.fillStyle;
      ctx.fillStyle = editor.hover_bg_color;
      ctx.fillRect(editor.x,box_y,editor.back_btn_w,editor.selection_box_h);
      ctx.fillStyle = oldStyle;
    }
    drawLine(editor.x,box_y+editor.selection_box_h,editor.x+editor.w,box_y+editor.selection_box_h,ctx);
    ctx.fillText("Domain ("+domain.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
    off_y += editor.selection_box_h;
  }
}

var editable_group = function(editor)
{
  var self = this;
}

var editable_object = function(editor)
{
  var self = this;
}


var editable_list = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered = function(i) { }//overwrite
  self.selected = function(i) { }//overwrite

  self.hover = function(list,evt)
  {
    var old_hovering_i = self.hovering_i;
    // if(!fWithin(editor.x,editor.x+editor.w,evt.doX)) return; //commented out because should be assumed
    self.hovering_i = 0;

    var off_y = 0;
    var box_y;
    box_y = editor.y+off_y;
    off_y += editor.selection_box_h;
    for(var i = 1; i < list.length; i++)
    {
      box_y = editor.y+off_y;
      if(fWithin(box_y,box_y+editor.selection_box_h,evt.doY)) self.hovering_i = i;
      off_y += editor.selection_box_h;
    }
    box_y = editor.y+off_y;
    if(fWithin(box_y,box_y+editor.selection_box_h,evt.doY)) self.hovering_i = list.length;
    off_y += editor.selection_box_h;

    if(self.hovering_i != old_hovering_i) self.hovered(self.hovering_i);
  }

  self.unhover = function(evt)
  {
    var old_hovering_i = self.hovering_i;
    self.hovering_i = 0;
    if(self.hovering_i != old_hovering_i) self.hovered(self.hovering_i);
  }

  self.click = function(list,evt)
  {
    if(self.hovering_i)
    {
      self.selected_i = self.hovering_i;
      self.selected(self.selected_i);
    }
  }

  self.draw = function(title,list,ctx)
  {
    var off_y = 0;
    var box_y;
    box_y = editor.y+off_y;
    drawLine(editor.x,box_y+editor.selection_box_h,editor.x+editor.w,box_y+editor.selection_box_h,ctx);
    ctx.fillText(title,editor.x+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
    off_y += editor.selection_box_h;
    for(var i = 1; i < list.length; i++)
    {
      box_y = editor.y+off_y;
      if(self.hovering_i == i)
      {
        var oldStyle = ctx.fillStyle;
        ctx.fillStyle = editor.hover_bg_color;
        ctx.fillRect(editor.x,box_y,editor.w,editor.selection_box_h);
        ctx.fillStyle = oldStyle;
      }
      drawLine(editor.x,box_y+editor.selection_box_h,editor.x+editor.w,box_y+editor.selection_box_h,ctx);
      ctx.fillText(list[i].name,editor.x+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
      off_y += editor.selection_box_h;
    }
    box_y = editor.y+off_y;
    if(self.hovering_i == list.length)
    {
      var oldStyle = ctx.fillStyle;
      ctx.fillStyle = editor.hover_bg_color;
      ctx.fillRect(editor.x,box_y,editor.w,editor.selection_box_h);
      ctx.fillStyle = oldStyle;
    }
    drawLine(editor.x,box_y+editor.selection_box_h,editor.x+editor.w,box_y+editor.selection_box_h,ctx);
    ctx.fillText("+",editor.x+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
    off_y += editor.selection_box_h;
  }

}


var content_editor = function(editor)
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.font_size = 20;
  self.font_face = "Helvetica";
  self.hover_bg_color = "#AAAAAA";

  self.back_btn_w = 30;

  self.selection_box_text_off_x = 5;
  self.selection_box_text_off_y = self.font_size;
  self.selection_box_h = self.font_size+5;

  self.editable_list = new editable_list(self);
  self.editable_list.hovered = function(i){};//ignore
  self.editable_list.selected = function(i)
  {
    if(i == self.cur_list.length)
    {
      switch(self.edit_type)
      {
        case CONTENT_ENUM_DOMAIN: ndomain(); break;
        case CONTENT_ENUM_GROUP:  ngroup(); break;
        case CONTENT_ENUM_OBJECT: nobject(); break;
      }
    }
    self.cur_selected_i = i;
    self.edit_mode = EDIT_MODE_ENUM_INDIVIDUAL;

    self.cur_title = "";
    self.cur_list = 0;

    self.editable_list.selected_i = 0;
    self.editable_list.hovering_i = 0;
  };

  self.cur_list = domains;
  self.cur_title = "Domains:";
  self.cur_selected_i = 0;

  self.editable_domain = new editable_domain(self);
  self.editable_domain.hovered = function(i){};//ignore
  self.editable_domain.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;
      self.cur_list = domains;
      self.cur_title = "Domains:";

      self.editable_domain.hovering_i = 0;
      self.editable_domain.selected_i = 0;
    }
  };

  self.editable_group = new editable_group(self);
  self.editable_group.hovered = function(i){};//ignore
  self.editable_group.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;
      self.cur_list = groups;
      self.cur_title = "Groups:";
    }
  };

  self.editable_object = new editable_object(self);
  self.editable_object.hovered = function(i){};//ignore
  self.editable_object.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;
      self.cur_list = objects;
      self.cur_title = "Objects:";
    }
  };

  var ENUM;

  self.edit_type = CONTENT_ENUM_DOMAIN;

  ENUM = 0;
  EDIT_MODE_ENUM_NONE       = ENUM; ENUM++;
  EDIT_MODE_ENUM_LIST       = ENUM; ENUM++;
  EDIT_MODE_ENUM_INDIVIDUAL = ENUM; ENUM++;
  EDIT_MODE_ENUM_COUNT      = ENUM; ENUM++;
  self.edit_mode = EDIT_MODE_ENUM_LIST;

  ENUM = 0;
  EDIT_PROPERTY_ENUM_NONE = ENUM; ENUM++;

  self.hover = function(evt)
  {
    switch(self.edit_mode)
    {
      case EDIT_MODE_ENUM_LIST: self.editable_list.hover(self.cur_list,evt); break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: self.editable_domain.hover(domains[self.cur_selected_i],evt); break;
          case CONTENT_ENUM_GROUP:  self.editable_group.hover(groups[  self.cur_selected_i],evt); break;
          case CONTENT_ENUM_OBJECT: self.editable_object.hover(objects[self.cur_selected_i],evt); break;
        }
        break;
    }
  }

  self.unhover = function(evt)
  {
    self.hovering_i = 0;
  }

  self.click = function(evt)
  {
    switch(self.edit_mode)
    {
      case EDIT_MODE_ENUM_LIST: self.editable_list.click(self.cur_list,evt); break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: self.editable_domain.click(domains[self.cur_selected_i],evt); break;
          case CONTENT_ENUM_GROUP:  self.editable_group.click(groups[  self.cur_selected_i],evt); break;
          case CONTENT_ENUM_OBJECT: self.editable_object.click(objects[self.cur_selected_i],evt); break;
        }
        break;
    }
  }

  self.draw = function(ctx)
  {
    ctx.fillStyle = black;
    ctx.strokeStyle = black;
    ctx.font = self.font_size+"px "+self.font_face;
    ctx.textAlign = "left";

    strokeBox(self,ctx);

    switch(self.edit_mode)
    {
      case EDIT_MODE_ENUM_LIST: self.editable_list.draw(self.cur_title,self.cur_list,ctx); break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: self.editable_domain.draw(domains[self.cur_selected_i],ctx); break;
          case CONTENT_ENUM_GROUP:  self.editable_group.draw(groups[  self.cur_selected_i],ctx); break;
          case CONTENT_ENUM_OBJECT: self.editable_object.draw(objects[self.cur_selected_i],ctx); break;
        }
        break;
    }
  }

}

var drawState = function()
{

}

