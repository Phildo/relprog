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

  dom_drop = document.createElement("select");
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
    self.set_val(dom_text.value);
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

var editable_int = function(editor)
{
  var self = this;
  self.text = "";
  self.val = "";

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
    var old_val = self.val;
    self.set_val(dom_text.value);
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

var editable_float = function(editor)
{
  var self = this;
  self.text = "";
  self.val = "";

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
    var old_val = self.val;
    self.set_val(dom_text.value);
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

var editable_color = function(editor)
{
  var self = this;
  self.text = "";
  self.val = "";

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
    var old_val = self.val;
    self.set_val(dom_text.value);
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

var editable_img = function(editor)
{
  var self = this;
  self.text = "";
  self.val = "";

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
    var old_val = self.val;
    self.set_val(dom_text.value);
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

var editable_toggle = function(editor)
{
  var self = this;
  self.text = "";
  self.val = 0;

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
  }

  self.set_val = function(val)
  {
    self.val = val;
    self.text = self.val;
  }

  self.activate = function(off_x,off_y)
  {
  }

  self.deactivate = function()
  {
  }

  self.hover = function(off_y,evt)
  {

  }

  self.click = function(off_y,evt)
  {
    self.set_val(self.val ? 0 : 1);
    self.changed();
  }

}

var editable_viz = function(editor)
{
  var self = this;
  self.text = "";
  self.val = VIZ_ENUM_NONE;

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
    var old_val = self.val;
    self.set_val(parseInt(dom_drop.value));
    if(self.val != old_val) self.changed();
  }

  self.set_val = function(val)
  {
    self.val = val;
    self.text = "";
    switch(self.val)
    {
      case VIZ_ENUM_COLOR:    self.text = "Color";    break;
      case VIZ_ENUM_SPACIAL:  self.text = "Spacial";  break;
      case VIZ_ENUM_TEMPORAL: self.text = "Temporal"; break;
      case VIZ_ENUM_TAG:      self.text = "Tag";      break;
    }
  }

  self.activate = function(off_x,off_y)
  {
    dom_drop.innerHTML =
    "<option value=\""+VIZ_ENUM_COLOR   +"\">Color</option>"+
    "<option value=\""+VIZ_ENUM_SPACIAL +"\">Spacial</option>"+
    "<option value=\""+VIZ_ENUM_TEMPORAL+"\">Temporal</option>"+
    "<option value=\""+VIZ_ENUM_TAG     +"\">Tag</option>"
    ;
    dom_drop.value = self.val;
    dom_drop.style.display = "block";
    dom_drop.style.left = editor.x+off_x+"px";
    dom_drop.style.top  = editor.y+off_y+"px";
    dom_drop_callback = self.listen_change;
    dom_drop.focus();
  }

  self.deactivate = function()
  {
    dom_drop.style.display = "none";
    dom_drop.value = 0;
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
  self.text = "";
  self.val = 0;

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
    var old_val = self.val;
    self.set_val(parseInt(dom_drop.value));
    if(self.val != old_val) self.changed();
  }

  self.set_val = function(val)
  {
    self.val = val;
    self.text = domains[self.val].name;
  }

  self.activate = function(off_x,off_y)
  {
    var html = "";
    for(var i = 1; i < domains.length; i++)
      html += "<option value=\""+i+"\">"+domains[i].name+"</option>";
    dom_drop.innerHTML = html;
    dom_drop.value = self.val;
    dom_drop.style.display = "block";
    dom_drop.style.left = editor.x+off_x+"px";
    dom_drop.style.top  = editor.y+off_y+"px";
    dom_drop_callback = self.listen_change;
    dom_drop.focus();
  }

  self.deactivate = function()
  {
    dom_drop.style.display = "none";
    dom_drop.value = 0;
  }

  self.hover = function(off_y,evt)
  {

  }

  self.click = function(off_y,evt)
  {

  }

}

var domain_editor = function(editor)
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
    self.editable_name.set_val(        self.domain.name);
    self.editable_mutex.set_val(       self.domain.mutex);
    self.editable_directed.set_val(    self.domain.directed);
    self.editable_t_one_to_one.set_val(self.domain.t_one_to_one);
    self.editable_viz.set_val(         self.domain.viz);
  }

  self.editable_name                 = new editable_text(editor);
  self.editable_name.changed         = function() { self.domain.name         = self.editable_name.val;     };
  self.editable_mutex                = new editable_toggle(editor);
  self.editable_mutex.changed        = function() { self.domain.mutex        = self.editable_mutex.val;    };
  self.editable_directed             = new editable_toggle(editor);
  self.editable_directed.changed     = function() { self.domain.directed     = self.editable_directed.val; };
  self.editable_t_one_to_one         = new editable_toggle(editor);
  self.editable_t_one_to_one.changed = function() { self.domain.t_one_to_one = self.editable_t_one_to_one.val; };
  self.editable_viz                  = new editable_viz(editor);
  self.editable_viz.changed          = function() { self.domain.viz          = self.editable_viz.val;      };

  self.properties = [];
  self.properties.push(self.editable_name);
  self.properties.push(self.editable_mutex);
  self.properties.push(self.editable_directed);
  self.properties.push(self.editable_t_one_to_one);
  self.properties.push(self.editable_viz);

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

var group_editor = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.group = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_group = function(group)
  {
    self.group = group;
    self.editable_name.set_val(  self.group.name);
    self.editable_domain.set_val(self.group.domain);
    self.editable_seq.set_val(   self.group.seq);
    self.editable_color.set_val( self.group.color);
    self.editable_img.set_val(   self.group.img);
    self.editable_wx.set_val(    self.group.wx);
    self.editable_wy.set_val(    self.group.wy);
  }

  self.editable_name           = new editable_text(editor);
  self.editable_name.changed   = function() { self.group.name   = self.editable_name.val;     };
  self.editable_domain         = new editable_domain(editor);
  self.editable_domain.changed = function() { self.group.domain = self.editable_domain.val;    };
  self.editable_seq            = new editable_int(editor);
  self.editable_seq.changed    = function() { self.group.seq    = self.editable_seq.val;    };
  self.editable_color          = new editable_color(editor);
  self.editable_color.changed  = function() { self.group.color  = self.editable_color.val;    };
  self.editable_img            = new editable_img(editor);
  self.editable_img.changed    = function() { self.group.img    = self.editable_img.val;    };
  self.editable_wx             = new editable_float(editor);
  self.editable_wx.changed     = function() { self.group.wx     = self.editable_wx.val;    };
  self.editable_wy             = new editable_float(editor);
  self.editable_wy.changed     = function() { self.group.wy     = self.editable_wy.val;    };

  self.properties = [];
  self.properties.push(self.editable_name);
  self.properties.push(self.editable_domain);
  self.properties.push(self.editable_seq);
  self.properties.push(self.editable_color);
  self.properties.push(self.editable_img);
  self.properties.push(self.editable_wx);
  self.properties.push(self.editable_wy);

  self.hover = function(group,evt)
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

  self.click = function(group,evt)
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

  self.draw = function(group,ctx)
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
    ctx.fillText("group ("+group.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
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

var object_editor = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.object = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_object = function(object)
  {
    self.object = object;
    self.editable_name.set_val( self.object.name);
    self.editable_color.set_val(self.object.color);
    self.editable_img.set_val(  self.object.img);
  }

  self.editable_name          = new editable_text(editor);
  self.editable_name.changed  = function() { self.object.name  = self.editable_name.val;  };
  self.editable_color         = new editable_color(editor);
  self.editable_color.changed = function() { self.object.color = self.editable_color.val; };
  self.editable_img           = new editable_img(editor);
  self.editable_img.changed   = function() { self.object.img   = self.editable_img.val;   };

  self.properties = [];
  self.properties.push(self.editable_name);
  self.properties.push(self.editable_color);
  self.properties.push(self.editable_img);

  self.hover = function(object,evt)
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

  self.click = function(object,evt)
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

  self.draw = function(object,ctx)
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
    ctx.fillText("object ("+object.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
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

var editable_list = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;
  self.delete_mod = 0;

  self.hovered = function(i,del) { }//overwrite
  self.selected = function(i,del) { }//overwrite

  self.hover = function(list,back,add,del,evt)
  {
    var old_hovering_i = self.hovering_i;
    self.hovering_i = 0;
    self.delete_mod = 0;
    if(del && fWithin(editor.x+editor.w-editor.selection_box_h,editor.x+editor.w,evt.doX))
      self.delete_mod = 1;

    var off_y = 0;
    var box_y;
    if(back)
    {
      box_y = editor.y+off_y;
      if(
        fWithin(box_y,box_y+editor.selection_box_h,evt.doY) &&
        fWithin(editor.x,editor.x+editor.back_btn_w,evt.doX)
      )
        self.hovering_i = -1; //back btn
    }
    off_y += editor.selection_box_h;

    for(var i = 1; i < list.length; i++)
    {
      box_y = editor.y+off_y;
      if(fWithin(box_y,box_y+editor.selection_box_h,evt.doY)) self.hovering_i = i;
      off_y += editor.selection_box_h;
    }

    if(add)
    {
      box_y = editor.y+off_y;
      if(fWithin(box_y,box_y+editor.selection_box_h,evt.doY)) self.hovering_i = list.length;
      off_y += editor.selection_box_h;
    }

    if(self.hovering_i != old_hovering_i) self.hovered(self.hovering_i,self.delete_mod);
  }

  self.unhover = function(evt)
  {
    var old_hovering_i = self.hovering_i;
    self.hovering_i = 0;
    if(self.hovering_i != old_hovering_i) self.hovered(self.hovering_i);
  }

  self.click = function(list,back,add,del,evt)
  {
    if(self.hovering_i)
    {
      self.selected_i = self.hovering_i;
      self.selected(self.selected_i,self.delete_mod);
    }
  }

  self.draw = function(list,title,back,add,del,ctx)
  {
    var off_y = 0;
    var box_y;

    box_y = editor.y+off_y;
    if(back && self.hovering_i == -1)
    {
      var oldStyle = ctx.fillStyle;
      ctx.fillStyle = editor.hover_bg_color;
      ctx.fillRect(editor.x,box_y,editor.back_btn_w,editor.selection_box_h);
      ctx.fillStyle = oldStyle;
    }
    drawLine(editor.x,box_y+editor.selection_box_h,editor.x+editor.w,box_y+editor.selection_box_h,ctx);
    if(back) ctx.fillText(title,editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
    else     ctx.fillText(title,editor.x+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
    off_y += editor.selection_box_h;

    for(var i = 1; i < list.length; i++)
    {
      box_y = editor.y+off_y;
      if(self.hovering_i == i)
      {
        var oldStyle = ctx.fillStyle;
        ctx.fillStyle = editor.hover_bg_color;
        if(!del)
          ctx.fillRect(editor.x,box_y,editor.w,editor.selection_box_h);
        else if(del && self.delete_mod)
          ctx.fillRect(editor.x+editor.w-editor.selection_box_h,box_y,editor.selection_box_h,editor.selection_box_h);
        else if(del && !self.delete_mod)
          ctx.fillRect(editor.x,box_y,editor.w-editor.selection_box_h,editor.selection_box_h);
        ctx.fillStyle = oldStyle;
      }
      drawLine(editor.x,box_y+editor.selection_box_h,editor.x+editor.w,box_y+editor.selection_box_h,ctx);
      ctx.fillText(list[i].name,editor.x+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
      off_y += editor.selection_box_h;
    }

    if(add)
    {
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

  var contents = [{name:"null"},{name:"Domains"},{name:"Groups"},{name:"Objects"}]; //hacked "list" for selector selector

  self.editable_list = new editable_list(self);
  self.editable_list.hovered = function(i,del){};//ignore
  self.editable_list.selected = function(i,del)
  {
    if(i == -1)
    {
      switch(self.edit_type)
      {
        case CONTENT_ENUM_DOMAIN:
        case CONTENT_ENUM_GROUP:
        case CONTENT_ENUM_OBJECT:
          self.edit_type = CONTENT_ENUM_NONE;
          self.cur_title = "Edit:";
          break;
      }
    }
    else
    {
      if(self.edit_type == CONTENT_ENUM_NONE)
      {
        switch(i)
        {
          case 1: self.edit_type = CONTENT_ENUM_DOMAIN; self.cur_title = "Domains:"; break;
          case 2: self.edit_type = CONTENT_ENUM_GROUP;  self.cur_title = "Groups:";  break;
          case 3: self.edit_type = CONTENT_ENUM_OBJECT; self.cur_title = "Objects:"; break;
        }
      }
      else
      {
        var list;
        var gen;
        var editor;
        var edset;
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: list = domains; gen = ndomain; if(del) del = ddomain; editor = self.domain_editor; edset = self.domain_editor.set_domain; break;
          case CONTENT_ENUM_GROUP:  list = groups;  gen = ngroup;  if(del) del = dgroup;  editor = self.group_editor;  edset = self.group_editor.set_group;   break;
          case CONTENT_ENUM_OBJECT: list = objects; gen = nobject; if(del) del = dobject; editor = self.object_editor; edset = self.object_editor.set_object; break;
        }

        var is_new = 0;
        if(del && i != list.length) del(list[i]);
        else
        {
          if(i == list.length) { gen(); is_new = 1; }
          self.cur_selected_i = i;
          self.edit_mode = EDIT_MODE_ENUM_INDIVIDUAL;
          edset(list[self.cur_selected_i]);
          if(is_new) editor.editable_name.activate(0,self.selection_box_h);

          self.cur_title = "";
        }
      }
    }

    self.editable_list.selected_i = 0;
    self.editable_list.hovering_i = 0;
  };

  self.cur_title = "Edit:";
  self.cur_selected_i = 0;

  self.domain_editor = new domain_editor(self);
  self.domain_editor.hovered = function(i){};//ignore
  self.domain_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;
      self.cur_title = "Domains:";

      self.domain_editor.hovering_i = 0;
      self.domain_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  self.group_editor = new group_editor(self);
  self.group_editor.hovered = function(i){};//ignore
  self.group_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;
      self.cur_title = "Groups:";

      self.group_editor.hovering_i = 0;
      self.group_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  self.object_editor = new object_editor(self);
  self.object_editor.hovered = function(i){};//ignore
  self.object_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;
      self.cur_title = "Objects:";

      self.object_editor.hovering_i = 0;
      self.object_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  var ENUM;

  self.edit_type = CONTENT_ENUM_NONE;

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
      case EDIT_MODE_ENUM_LIST:
        switch(self.edit_type)
        {
          case CONTENT_ENUM_NONE:   self.editable_list.hover(contents,0,0,0,evt); break;
          case CONTENT_ENUM_DOMAIN: self.editable_list.hover(domains, 1,1,1,evt); break;
          case CONTENT_ENUM_GROUP:  self.editable_list.hover(groups,  1,1,1,evt); break;
          case CONTENT_ENUM_OBJECT: self.editable_list.hover(objects, 1,1,1,evt); break;
        }
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: self.domain_editor.hover(domains[self.cur_selected_i],evt); break;
          case CONTENT_ENUM_GROUP:  self.group_editor.hover(groups[  self.cur_selected_i],evt); break;
          case CONTENT_ENUM_OBJECT: self.object_editor.hover(objects[self.cur_selected_i],evt); break;
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
        switch(self.edit_type)
        {
          case CONTENT_ENUM_NONE:   self.editable_list.click(contents,0,0,0,evt); break;
          case CONTENT_ENUM_DOMAIN: self.editable_list.click(domains, 1,1,1,evt); break;
          case CONTENT_ENUM_GROUP:  self.editable_list.click(groups,  1,1,1,evt); break;
          case CONTENT_ENUM_OBJECT: self.editable_list.click(objects, 1,1,1,evt); break;
        }
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: self.domain_editor.click(domains[self.cur_selected_i],evt); break;
          case CONTENT_ENUM_GROUP:  self.group_editor.click(groups[  self.cur_selected_i],evt); break;
          case CONTENT_ENUM_OBJECT: self.object_editor.click(objects[self.cur_selected_i],evt); break;
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
        switch(self.edit_type)
        {
          case CONTENT_ENUM_NONE:   self.editable_list.draw(contents,self.cur_title,0,0,0,ctx); break;
          case CONTENT_ENUM_DOMAIN: self.editable_list.draw(domains, self.cur_title,1,1,1,ctx); break;
          case CONTENT_ENUM_GROUP:  self.editable_list.draw(groups,  self.cur_title,1,1,1,ctx); break;
          case CONTENT_ENUM_OBJECT: self.editable_list.draw(objects, self.cur_title,1,1,1,ctx); break;
        }
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        switch(self.edit_type)
        {
          case CONTENT_ENUM_DOMAIN: self.domain_editor.draw(domains[self.cur_selected_i],ctx); break;
          case CONTENT_ENUM_GROUP:  self.group_editor.draw(groups[  self.cur_selected_i],ctx); break;
          case CONTENT_ENUM_OBJECT: self.object_editor.draw(objects[self.cur_selected_i],ctx); break;
        }
        break;
    }
  }

}

var drawState = function()
{

}

