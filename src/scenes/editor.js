var content_cam;
var timeline_cam;

var dom_parent;
var dom_text;
var dom_text_callback = function(){};
var dom_toggle;
var dom_toggle_callback = function(){};
var dom_drop;
var dom_drop_callback = function(){};
var init_dom = function()
{
  dom_parent = document.getElementById("stage_container");

  dom_text = document.createElement("input");
  dom_text.style.display = "none";
  dom_text.style.position = "absolute";
  dom_text.style.left = "0px";
  dom_text.style.top = "0px";
  dom_text.style.zIndex = "1";
  dom_text.onchange = function(){dom_text_callback();};
  dom_parent.appendChild(dom_text);

  dom_toggle = document.createElement("input");
  dom_toggle.style.display = "none";
  dom_toggle.style.position = "absolute";
  dom_toggle.style.left = "0px";
  dom_toggle.style.top = "0px";
  dom_toggle.style.zIndex = "1";
  dom_toggle.onchange = function(){dom_toggle_callback();};
  dom_parent.appendChild(dom_toggle);

  dom_drop = document.createElement("input");
  dom_drop.style.display = "none";
  dom_drop.style.position = "absolute";
  dom_drop.style.left = "0px";
  dom_drop.style.top = "0px";
  dom_drop.style.zIndex = "1";
  dom_drop.onchange = function(){dom_drop_callback();};
  dom_parent.appendChild(dom_drop);
}

var editable_text = function(editor)
{
  var self = this;
  self.text = "";
  self.val = "";

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
    var old_val = self.val;
    self.val = dom_text.value;
    self.text = self.val;
    if(self.val != old_val) self.changed();
  }

  self.set_val = function(val)
  {
    self.val = val;
    self.text = self.val;
  }

  self.activate = function(off_x,off_y)
  {
    dom_text.value = self.val;
    dom_text.style.display = "block";
    dom_text.style.left = editor.x+off_x+"px";
    dom_text.style.top  = editor.y+off_y+"px";
    dom_text_callback = self.listen_change;
    dom_text.focus();
  }

  self.deactivate = function()
  {
    dom_text.style.display = "none";
    dom_text.value = "";
  }

  self.hover = function(off_y,evt)
  {

  }

  self.click = function(off_y,evt)
  {

  }

}

var editable_domain = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.domain = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_domain = function(domain)
  {
    self.domain = domain;
    self.name_editor.set_val(    self.domain.name);
    self.mutex_editor.set_val(   self.domain.mutex);
    self.directed_editor.set_val(self.domain.directed);
    self.viz_editor.set_val(     self.domain.viz);
  }

  self.name_editor             = new editable_text(editor);
  self.name_editor.changed     = function() { self.domain.name     = self.name_editor.val;     };
  self.mutex_editor            = new editable_text(editor);
  self.mutex_editor.changed    = function() { self.domain.mutex    = self.mutex_editor.val;    };
  self.directed_editor         = new editable_text(editor);
  self.directed_editor.changed = function() { self.domain.directed = self.directed_editor.val; };
  self.viz_editor              = new editable_text(editor);
  self.viz_editor.changed      = function() { self.domain.viz      = self.viz_editor.val;      };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.mutex_editor);
  self.properties.push(self.directed_editor);
  self.properties.push(self.viz_editor);

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

    for(var i = 0; i < self.properties.length; i++)
    {
      box_y = editor.y+off_y;
      if(fWithin(box_y,box_y+editor.selection_box_h,evt.doY)) self.hovering_i = i+1;
      self.properties[i].hover(box_y,evt);
      off_y += editor.selection_box_h;
    }

    if(self.hovering_i != old_hovering_i) self.hovered(self.hovering_i);
  }

  self.click = function(domain,evt)
  {
    var off_y = 0;
    var box_y;
    box_y = editor.y+off_y;
    if(self.hovering_i == -1)
    {
      for(var i = 0; i < self.properties.length; i++) self.properties[i].deactivate();
      self.selected(self.hovering_i);
    }
    off_y += editor.selection_box_h;

    for(var i = 0; i < self.properties.length; i++)
    {
      box_y = editor.y+off_y;
      if(self.hovering_i == i+1)
      {
        for(var j = 0; j < self.properties.length; j++) if(j != i) self.properties[j].deactivate();
        self.properties[i].activate(0,off_y);
        self.properties[i].click(box_y,evt);
      }
      off_y += editor.selection_box_h;
    }
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

    for(var i = 0; i < self.properties.length; i++)
    {
      box_y = editor.y+off_y;
      if(self.hovering_i == i+1)
      {
        var oldStyle = ctx.fillStyle;
        ctx.fillStyle = editor.hover_bg_color;
        ctx.fillRect(editor.x,box_y,editor.w,editor.selection_box_h);
        ctx.fillStyle = oldStyle;
      }
      drawLine(editor.x,box_y+editor.selection_box_h,editor.x+editor.w,box_y+editor.selection_box_h,ctx);
      ctx.fillText(self.properties[i].text,editor.x+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
      off_y += editor.selection_box_h;
    }
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
  init_dom();

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
    var is_new = 0;
    if(i == self.cur_list.length)
    {
      switch(self.edit_type)
      {
        case CONTENT_ENUM_DOMAIN: ndomain(); break;
        case CONTENT_ENUM_GROUP:  ngroup(); break;
        case CONTENT_ENUM_OBJECT: nobject(); break;
      }
      is_new = 1;
    }
    self.cur_selected_i = i;
    self.edit_mode = EDIT_MODE_ENUM_INDIVIDUAL;
    switch(self.edit_type)
    {
      case CONTENT_ENUM_DOMAIN: self.editable_domain.set_domain(domains[self.cur_selected_i]); break;
      case CONTENT_ENUM_GROUP:  self.editable_group.set_group(groups[   self.cur_selected_i]); break;
      case CONTENT_ENUM_OBJECT: self.editable_object.set_object(objects[self.cur_selected_i]); break;
    }
    if(is_new)
    {
      switch(self.edit_type)
      {
        case CONTENT_ENUM_DOMAIN: self.editable_domain.name_editor.activate(0,self.selection_box_h); break;
        case CONTENT_ENUM_GROUP:  self.editable_group.name_editor.activate(0,self.selection_box_h); break;
        case CONTENT_ENUM_OBJECT: self.editable_object.name_editor.activate(0,self.selection_box_h); break;
      }
    }

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

