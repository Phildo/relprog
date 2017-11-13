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

  self.font_size = 20;
  self.font_face = "Helvetica";
  self.hover_bg_color = "#AAAAAA";

  self.back_btn_w = 30;

  self.selection_box_text_off_x = 5;
  self.selection_box_text_off_y = self.font_size;
  self.selection_box_h = self.font_size+5;

  var ENUM;

  ENUM = 0;
  EDIT_MODE_ENUM_NONE       = ENUM; ENUM++;
  EDIT_MODE_ENUM_LIST       = ENUM; ENUM++;
  EDIT_MODE_ENUM_INDIVIDUAL = ENUM; ENUM++;
  EDIT_MODE_ENUM_COUNT      = ENUM; ENUM++;

  self.edit_mode = EDIT_MODE_ENUM_LIST;
  self.edit_type = CONTENT_ENUM_DOMAIN;
  self.hovering_i = 0;
  self.selected_i = 0;

  self.hover = function(evt)
  {
    switch(self.edit_mode)
    {
      case EDIT_MODE_ENUM_LIST:
        // if(!fWithin(self.x,self.x+self.w,evt.doX)) return; //commented out because should be assumed
        self.hovering_i = 0;

        var list = content_lists[self.edit_type];
        var off_y = 0;
        var box_y;
        box_y = self.y+off_y;
        off_y += self.selection_box_h;
        for(var i = 1; i < list.length; i++)
        {
          box_y = self.y+off_y;
          if(fWithin(box_y,box_y+self.selection_box_h,evt.doY)) self.hovering_i = i;
          off_y += self.selection_box_h;
        }
        box_y = self.y+off_y;
        if(fWithin(box_y,box_y+self.selection_box_h,evt.doY)) self.hovering_i = list.length;
        off_y += self.selection_box_h;
        break;

      case EDIT_MODE_ENUM_INDIVIDUAL:

        // if(!fWithin(self.x,self.x+self.w,evt.doX)) return; //commented out because should be assumed
        self.hovering_i = 0;

        var list = content_lists[self.edit_type];
        var off_y = 0;
        var box_y;
        box_y = self.y+off_y;
        if(
          fWithin(box_y,box_y+self.selection_box_h,evt.doY) &&
          fWithin(self.x,self.x+self.back_btn_w,evt.doX)
        )
          self.hovering_i = -1; //back btn
        off_y += self.selection_box_h;

        break;
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: break;
          case CONTENT_ENUM_GROUP: break;
          case CONTENT_ENUM_OBJECT: break;
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
      case EDIT_MODE_ENUM_LIST:
        if(self.hovering_i)
        {
          var list = content_lists[self.edit_type];
          if(self.hovering_i == list.length)
            ncontent(self.edit_type);
          self.selected_i = self.hovering_i;
          self.hovering_i = 0;
          self.edit_mode = EDIT_MODE_ENUM_INDIVIDUAL;
        }
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        if(self.hovering_i == -1) //back btn
        {
          self.hovering_i = 0;
          self.selected_i = 0;
          self.edit_mode = EDIT_MODE_ENUM_LIST;
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
      case EDIT_MODE_ENUM_LIST:
        var title = "";
        var list = content_lists[self.edit_type];
        var off_y = 0;
        var box_y;
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: title = "Domains:"; break;
          case CONTENT_ENUM_GROUP:  title = "Groups:";  break;
          case CONTENT_ENUM_OBJECT: title = "Objects:"; break;
        }
        box_y = self.y+off_y;
        drawLine(self.x,box_y+self.selection_box_h,self.x+self.w,box_y+self.selection_box_h,ctx);
        ctx.fillText(title,self.x+self.selection_box_text_off_x,box_y+self.selection_box_text_off_y);
        off_y += self.selection_box_h;
        for(var i = 1; i < list.length; i++)
        {
          box_y = self.y+off_y;
          if(self.hovering_i == i)
          {
            var oldStyle = ctx.fillStyle;
            ctx.fillStyle = self.hover_bg_color;
            ctx.fillRect(self.x,box_y,self.w,self.selection_box_h);
            ctx.fillStyle = oldStyle;
          }
          drawLine(self.x,box_y+self.selection_box_h,self.x+self.w,box_y+self.selection_box_h,ctx);
          ctx.fillText(list[i].name,self.x+self.selection_box_text_off_x,box_y+self.selection_box_text_off_y);
          off_y += self.selection_box_h;
        }
        box_y = self.y+off_y;
        if(self.hovering_i == list.length)
        {
          var oldStyle = ctx.fillStyle;
          ctx.fillStyle = self.hover_bg_color;
          ctx.fillRect(self.x,box_y,self.w,self.selection_box_h);
          ctx.fillStyle = oldStyle;
        }
        drawLine(self.x,box_y+self.selection_box_h,self.x+self.w,box_y+self.selection_box_h,ctx);
        ctx.fillText("+",self.x+self.selection_box_text_off_x,box_y+self.selection_box_text_off_y);
        off_y += self.selection_box_h;
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        var title = "";
        var list = content_lists[self.edit_type];
        var off_y = 0;
        var box_y;
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: title = "Domain ("+list[self.selected_i].name+"):"; break;
          case CONTENT_ENUM_GROUP:  title = "Group ("+ list[self.selected_i].name+"):"; break;
          case CONTENT_ENUM_OBJECT: title = "Object ("+list[self.selected_i].name+"):"; break;
        }
        box_y = self.y+off_y;
        if(self.hovering_i == -1)
        {
          var oldStyle = ctx.fillStyle;
          ctx.fillStyle = self.hover_bg_color;
          ctx.fillRect(self.x,box_y,self.back_btn_w,self.selection_box_h);
          ctx.fillStyle = oldStyle;
        }
        drawLine(self.x,box_y+self.selection_box_h,self.x+self.w,box_y+self.selection_box_h,ctx);
        ctx.fillText(title,self.x+self.back_btn_w+self.selection_box_text_off_x,box_y+self.selection_box_text_off_y);
        off_y += self.selection_box_h;

        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN:
            break;
          case CONTENT_ENUM_GROUP:
            break;
          case CONTENT_ENUM_OBJECT:
            break;
        }
        break;
    }
  }

}

var drawState = function()
{

}

