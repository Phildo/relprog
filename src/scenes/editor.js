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
  self.val = 0;

  self.changed = function(){}; //overwrite

  self.listen_change = function()
  {
    var old_val = self.val;
    self.set_val(parseInt(dom_text.value));
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
    self.set_val(parseFloat(dom_text.value));
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

var editable_direction = function(editor)
{
  var self = this;
  self.text = "";
  self.val = TRANSITION_DIRECTION_ENUM_NONE;

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
      case TRANSITION_DIRECTION_ENUM_IN:  self.text = "In";  break;
      case TRANSITION_DIRECTION_ENUM_OUT: self.text = "Out"; break;
    }
  }

  self.activate = function(off_x,off_y)
  {
    dom_drop.innerHTML =
    "<option value=\""+TRANSITION_DIRECTION_ENUM_IN +"\">In</option>"+
    "<option value=\""+TRANSITION_DIRECTION_ENUM_OUT+"\">Out</option>"
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

var editable_transition = function(editor)
{
  var self = this;
  self.text = "";
  self.val = TRANSITION_ENUM_NONE;

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
      case TRANSITION_ENUM_POP:       self.text = "Pop";       break;
      case TRANSITION_ENUM_LERP:      self.text = "Lerp";      break;
      case TRANSITION_ENUM_EASE_IN:   self.text = "Ease In";   break;
      case TRANSITION_ENUM_EASE_OUT:  self.text = "Ease Out";  break;
      case TRANSITION_ENUM_EASE_BOTH: self.text = "Ease Both"; break;
      case TRANSITION_ENUM_FADE:      self.text = "Fade";      break;
      case TRANSITION_ENUM_BOUNCE:    self.text = "Bounce";    break;
    }
  }

  self.activate = function(off_x,off_y)
  {
    dom_drop.innerHTML =
    "<option value=\""+TRANSITION_ENUM_POP      +"\">Pop</option>"+
    "<option value=\""+TRANSITION_ENUM_LERP     +"\">Lerp</option>"+
    "<option value=\""+TRANSITION_ENUM_EASE_IN  +"\">Ease In</option>"+
    "<option value=\""+TRANSITION_ENUM_EASE_OUT +"\">Ease Out</option>"+
    "<option value=\""+TRANSITION_ENUM_EASE_BOTH+"\">Ease Both</option>"+
    "<option value=\""+TRANSITION_ENUM_FADE     +"\">Fade</option>"+
    "<option value=\""+TRANSITION_ENUM_BOUNCE   +"\">Bounce</option>"
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

var editable_target = function(editor)
{
  var self = this;
  self.text = "";
  self.val = TARGET_ENUM_NONE;

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
      case TARGET_ENUM_ASPECT_FIT:  self.text = "Aspect Fit";  break;
      case TARGET_ENUM_ASPECT_FILL: self.text = "Aspect Fill"; break;
      case TARGET_ENUM_STRETCH:     self.text = "Stretch";     break;
    }
  }

  self.activate = function(off_x,off_y)
  {
    dom_drop.innerHTML =
    "<option value=\""+VIZ_ENUM_ASPECT_FIT +"\">Aspect Fit</option>"+
    "<option value=\""+VIZ_ENUM_ASPECT_FILL+"\">Aspect Fill</option>"+
    "<option value=\""+VIZ_ENUM_STRETCH    +"\">Stretch</option>"
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

var editable_group = function(editor)
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
    self.text = groups[self.val].name;
  }

  self.activate = function(off_x,off_y)
  {
    var html = "";
    for(var i = 1; i < groups.length; i++)
      html += "<option value=\""+i+"\">"+groups[i].name+"</option>";
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

var editable_object = function(editor)
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
    self.text = objects[self.val].name;
  }

  self.activate = function(off_x,off_y)
  {
    var html = "";
    for(var i = 1; i < objects.length; i++)
      html += "<option value=\""+i+"\">"+objects[i].name+"</option>";
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
    self.name_editor.set_val(        self.domain.name);
    self.mutex_editor.set_val(       self.domain.mutex);
    self.directed_editor.set_val(    self.domain.directed);
    self.t_one_to_one_editor.set_val(self.domain.t_one_to_one);
    self.viz_editor.set_val(         self.domain.viz);
  }

  self.name_editor                 = new editable_text(editor);
  self.mutex_editor                = new editable_toggle(editor);
  self.directed_editor             = new editable_toggle(editor);
  self.t_one_to_one_editor         = new editable_toggle(editor);
  self.viz_editor                  = new editable_viz(editor);
  self.name_editor.changed         = function() { self.domain.name         = self.name_editor.val;         calculateCacheState();};
  self.mutex_editor.changed        = function() { self.domain.mutex        = self.mutex_editor.val;        calculateCacheState();};
  self.directed_editor.changed     = function() { self.domain.directed     = self.directed_editor.val;     calculateCacheState();};
  self.t_one_to_one_editor.changed = function() { self.domain.t_one_to_one = self.t_one_to_one_editor.val; calculateCacheState();};
  self.viz_editor.changed          = function() { self.domain.viz          = self.viz_editor.val;          calculateCacheState();};

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.mutex_editor);
  self.properties.push(self.directed_editor);
  self.properties.push(self.t_one_to_one_editor);
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
    self.name_editor.set_val(  self.group.name);
    self.domain_editor.set_val(self.group.domain);
    self.seq_editor.set_val(   self.group.seq);
    self.color_editor.set_val( self.group.color);
    self.img_editor.set_val(   self.group.img);
    self.wx_editor.set_val(    self.group.wx);
    self.wy_editor.set_val(    self.group.wy);
  }

  self.name_editor           = new editable_text(editor);
  self.domain_editor         = new editable_domain(editor);
  self.seq_editor            = new editable_int(editor);
  self.color_editor          = new editable_color(editor);
  self.img_editor            = new editable_img(editor);
  self.wx_editor             = new editable_float(editor);
  self.wy_editor             = new editable_float(editor);
  self.name_editor.changed   = function() { self.group.name   = self.name_editor.val;   calculateCacheState(); };
  self.domain_editor.changed = function() { self.group.domain = self.domain_editor.val; calculateCacheState(); };
  self.seq_editor.changed    = function() { self.group.seq    = self.seq_editor.val;    calculateCacheState(); };
  self.color_editor.changed  = function() { self.group.color  = self.color_editor.val;  calculateCacheState(); };
  self.img_editor.changed    = function() { self.group.img    = self.img_editor.val;    calculateCacheState(); };
  self.wx_editor.changed     = function() { self.group.wx     = self.wx_editor.val;     calculateCacheState(); };
  self.wy_editor.changed     = function() { self.group.wy     = self.wy_editor.val;     calculateCacheState(); };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.domain_editor);
  self.properties.push(self.seq_editor);
  self.properties.push(self.color_editor);
  self.properties.push(self.img_editor);
  self.properties.push(self.wx_editor);
  self.properties.push(self.wy_editor);

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
    self.name_editor.set_val( self.object.name);
    self.color_editor.set_val(self.object.color);
    self.img_editor.set_val(  self.object.img);
  }

  self.name_editor          = new editable_text(editor);
  self.color_editor         = new editable_color(editor);
  self.img_editor           = new editable_img(editor);
  self.name_editor.changed  = function() { self.object.name  = self.name_editor.val;  calculateCacheState(); };
  self.color_editor.changed = function() { self.object.color = self.color_editor.val; calculateCacheState(); };
  self.img_editor.changed   = function() { self.object.img   = self.img_editor.val;   calculateCacheState(); };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.color_editor);
  self.properties.push(self.img_editor);

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

var annotation_editor = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.annotation = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_annotation = function(annotation)
  {
    self.annotation = annotation;
    self.name_editor.set_val( self.annotation.name);
    self.t_editor.set_val(    self.annotation.t);
    self.color_editor.set_val(self.annotation.color);
    self.img_editor.set_val(  self.annotation.img);
  }

  self.name_editor          = new editable_text(editor);
  self.t_editor             = new editable_int(editor);
  self.color_editor         = new editable_color(editor);
  self.img_editor           = new editable_img(editor);
  self.name_editor.changed  = function() { self.annotation.name  = self.name_editor.val;  calculateCacheState(); };
  self.t_editor.changed     = function() { self.annotation.t     = self.t_editor.val;     calculateCacheState(); };
  self.color_editor.changed = function() { self.annotation.color = self.color_editor.val; calculateCacheState(); };
  self.img_editor.changed   = function() { self.annotation.img   = self.img_editor.val;   calculateCacheState(); };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.t_editor);
  self.properties.push(self.color_editor);
  self.properties.push(self.img_editor);

  self.hover = function(annotation,evt)
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

  self.click = function(annotation,evt)
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

  self.draw = function(annotation,ctx)
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
    ctx.fillText("annotation ("+annotation.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
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

var group_annotation_editor = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.group_annotation = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_group_annotation = function(group_annotation)
  {
    self.group_annotation = group_annotation;
    self.name_editor.set_val( self.group_annotation.name);
    self.group_editor.set_val(self.group_annotation.group);
    self.t_editor.set_val(    self.group_annotation.t);
    self.color_editor.set_val(self.group_annotation.color);
    self.img_editor.set_val(  self.group_annotation.img);
  }

  self.name_editor  = new editable_text(editor);
  self.group_editor = new editable_group(editor);
  self.t_editor     = new editable_int(editor);
  self.color_editor = new editable_color(editor);
  self.img_editor   = new editable_img(editor);
  self.name_editor.changed  = function() { self.group_annotation.name  = self.name_editor.val;  calculateCacheState(); };
  self.group_editor.changed = function() { self.group_annotation.group  = self.group_editor.val;  calculateCacheState(); };
  self.t_editor.changed     = function() { self.group_annotation.t  = self.t_editor.val;  calculateCacheState(); };
  self.color_editor.changed = function() { self.group_annotation.color = self.color_editor.val; calculateCacheState(); };
  self.img_editor.changed   = function() { self.group_annotation.img   = self.img_editor.val;   calculateCacheState(); };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.group_editor);
  self.properties.push(self.t_editor);
  self.properties.push(self.color_editor);
  self.properties.push(self.img_editor);

  self.hover = function(group_annotation,evt)
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

  self.click = function(group_annotation,evt)
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

  self.draw = function(group_annotation,ctx)
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
    ctx.fillText("group_annotation ("+group_annotation.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
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

var object_annotation_editor = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.object_annotation = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_object_annotation = function(object_annotation)
  {
    self.object_annotation = object_annotation;
    self.name_editor.set_val(  self.object_annotation.name);
    self.object_editor.set_val(self.object_annotation.object);
    self.t_editor.set_val(     self.object_annotation.t);
    self.color_editor.set_val( self.object_annotation.color);
    self.img_editor.set_val(   self.object_annotation.img);
  }

  self.name_editor   = new editable_text(editor);
  self.object_editor = new editable_object(editor);
  self.t_editor      = new editable_int(editor);
  self.color_editor  = new editable_color(editor);
  self.img_editor    = new editable_img(editor);
  self.name_editor.changed   = function() { self.object_annotation.name   = self.name_editor.val;   calculateCacheState(); };
  self.object_editor.changed = function() { self.object_annotation.object = self.object_editor.val; calculateCacheState(); };
  self.t_editor.changed      = function() { self.object_annotation.t      = self.t_editor.val;      calculateCacheState(); };
  self.color_editor.changed  = function() { self.object_annotation.color  = self.color_editor.val;  calculateCacheState(); };
  self.img_editor.changed    = function() { self.object_annotation.img    = self.img_editor.val;    calculateCacheState(); };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.object_editor);
  self.properties.push(self.t_editor);
  self.properties.push(self.color_editor);
  self.properties.push(self.img_editor);

  self.hover = function(object_annotation,evt)
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

  self.click = function(object_annotation,evt)
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

  self.draw = function(object_annotation,ctx)
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
    ctx.fillText("object_annotation ("+object_annotation.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
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

var group_transition_editor = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.group_transition = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_group_transition = function(group_transition)
  {
    self.group_transition = group_transition;
    self.name_editor.set_val(      self.group_transition.name);
    self.group_editor.set_val(     self.group_transition.group);
    self.direction_editor.set_val( self.group_transition.direction);
    self.t_editor.set_val(         self.group_transition.t);
    self.transition_editor.set_val(self.group_transition.transition);
  }

  self.name_editor       = new editable_text(editor);
  self.group_editor      = new editable_group(editor);
  self.direction_editor  = new editable_direction(editor);
  self.t_editor          = new editable_int(editor);
  self.transition_editor = new editable_transition(editor);
  self.name_editor.changed       = function() { self.group_transition.name       = self.name_editor.val;       calculateCacheState(); };
  self.group_editor.changed      = function() { self.group_transition.group      = self.group_editor.val;      calculateCacheState(); };
  self.direction_editor.changed  = function() { self.group_transition.direction  = self.direction_editor.val;  calculateCacheState(); };
  self.t_editor.changed          = function() { self.group_transition.t          = self.t_editor.val;          calculateCacheState(); };
  self.transition_editor.changed = function() { self.group_transition.transition = self.transition_editor.val; calculateCacheState(); };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.group_editor);
  self.properties.push(self.direction_editor);
  self.properties.push(self.t_editor);
  self.properties.push(self.transition_editor);

  self.hover = function(group_transition,evt)
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

  self.click = function(group_transition,evt)
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

  self.draw = function(group_transition,ctx)
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
    ctx.fillText("group_transition ("+group_transition.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
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

var object_transition_editor = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.object_transition = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_object_transition = function(object_transition)
  {
    self.object_transition = object_transition;
    self.name_editor.set_val(      self.object_transition.name);
    self.object_editor.set_val(    self.object_transition.object);
    self.group_editor.set_val(     self.object_transition.group);
    self.direction_editor.set_val( self.object_transition.direction);
    self.t_editor.set_val(         self.object_transition.t);
    self.transition_editor.set_val(self.object_transition.transition);
  }

  self.name_editor       = new editable_text(editor);
  self.object_editor     = new editable_object(editor);
  self.group_editor      = new editable_group(editor);
  self.direction_editor  = new editable_direction(editor);
  self.t_editor          = new editable_int(editor);
  self.transition_editor = new editable_transition(editor);
  self.name_editor.changed       = function() { self.object_transition.name       = self.name_editor.val;       calculateCacheState(); };
  self.object_editor.changed     = function() { self.object_transition.object     = self.object_editor.val;     calculateCacheState(); };
  self.group_editor.changed      = function() { self.object_transition.group      = self.group_editor.val;      calculateCacheState(); };
  self.direction_editor.changed  = function() { self.object_transition.direction  = self.direction_editor.val;  calculateCacheState(); };
  self.t_editor.changed          = function() { self.object_transition.t          = self.t_editor.val;          calculateCacheState(); };
  self.transition_editor.changed = function() { self.object_transition.transition = self.transition_editor.val; calculateCacheState(); };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.object_editor);
  self.properties.push(self.group_editor);
  self.properties.push(self.direction_editor);
  self.properties.push(self.t_editor);
  self.properties.push(self.transition_editor);

  self.hover = function(object_transition,evt)
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

  self.click = function(object_transition,evt)
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

  self.draw = function(object_transition,ctx)
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
    ctx.fillText("object_transition ("+object_transition.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
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

var camera_target_editor = function(editor)
{
  var self = this;

  self.hovering_i = 0;
  self.selected_i = 0;

  self.hovered  = function(i) { }; //overwrite
  self.selected = function(i) { }; //overwrite

  self.camera_target = 0; //actually only necessary to prevent clumsy partial-caching for callbacks- but logically unnecessary
  self.set_camera_target = function(camera_target)
  {
    self.camera_target = camera_target;
    self.name_editor.set_val(      self.camera_target.name);
    self.wx_editor.set_val(        self.camera_target.wx);
    self.wy_editor.set_val(        self.camera_target.wy);
    self.ww_editor.set_val(        self.camera_target.ww);
    self.wh_editor.set_val(        self.camera_target.wh);
    self.t_editor.set_val(         self.camera_target.t);
    self.target_editor.set_val(    self.camera_target.target);
    self.transition_editor.set_val(self.camera_target.transition);
  }

  self.name_editor       = new editable_text(editor);
  self.wx_editor         = new editable_float(editor);
  self.wy_editor         = new editable_float(editor);
  self.ww_editor         = new editable_float(editor);
  self.wh_editor         = new editable_float(editor);
  self.t_editor          = new editable_int(editor);
  self.target_editor     = new editable_int(editor);
  self.transition_editor = new editable_transition(editor);
  self.name_editor.changed       = function() { self.camera_target.name       = self.name_editor.val;       calculateCacheState(); };
  self.wx_editor.changed         = function() { self.camera_target.wx         = self.wx_editor.val;         calculateCacheState(); };
  self.wy_editor.changed         = function() { self.camera_target.wy         = self.wy_editor.val;         calculateCacheState(); };
  self.ww_editor.changed         = function() { self.camera_target.ww         = self.ww_editor.val;         calculateCacheState(); };
  self.wh_editor.changed         = function() { self.camera_target.wh         = self.wh_editor.val;         calculateCacheState(); };
  self.t_editor.changed          = function() { self.camera_target.t          = self.t_editor.val;          calculateCacheState(); };
  self.target_editor.changed     = function() { self.camera_target.target     = self.target_editor.val;     calculateCacheState(); };
  self.transition_editor.changed = function() { self.camera_target.transition = self.transition_editor.val; calculateCacheState(); };

  self.properties = [];
  self.properties.push(self.name_editor);
  self.properties.push(self.wx_editor);
  self.properties.push(self.wy_editor);
  self.properties.push(self.ww_editor);
  self.properties.push(self.wh_editor);
  self.properties.push(self.t_editor);
  self.properties.push(self.target_editor);
  self.properties.push(self.transition_editor);

  self.hover = function(camera_target,evt)
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

  self.click = function(camera_target,evt)
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

  self.draw = function(camera_target,ctx)
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
    ctx.fillText("camera_target ("+camera_target.name+"):",editor.x+editor.back_btn_w+editor.selection_box_text_off_x,box_y+editor.selection_box_text_off_y);
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

var content_editor = function()
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

  var editor_for_content = function(type)
  {
    switch(type)
    {
      case CONTENT_ENUM_DOMAIN:            return self.domain_editor;            break;
      case CONTENT_ENUM_GROUP:             return self.group_editor;             break;
      case CONTENT_ENUM_OBJECT:            return self.object_editor;            break;
      case CONTENT_ENUM_ANNOTATION:        return self.annotation_editor;        break;
      case CONTENT_ENUM_GROUP_ANNOTATION:  return self.group_annotation_editor;  break;
      case CONTENT_ENUM_OBJECT_ANNOTATION: return self.object_annotation_editor; break;
      case CONTENT_ENUM_GROUP_TRANSITION:  return self.group_transition_editor;  break;
      case CONTENT_ENUM_OBJECT_TRANSITION: return self.object_transition_editor; break;
      case CONTENT_ENUM_CAMERA_TARGET:     return self.camera_target_editor;     break;
    }
  }

  var edset_for_content = function(type)
  {
    switch(type)
    {
      case CONTENT_ENUM_DOMAIN:            return self.domain_editor.set_domain;                       break;
      case CONTENT_ENUM_GROUP:             return self.group_editor.set_group;                         break;
      case CONTENT_ENUM_OBJECT:            return self.object_editor.set_object;                       break;
      case CONTENT_ENUM_ANNOTATION:        return self.annotation_editor.set_annotation;               break;
      case CONTENT_ENUM_GROUP_ANNOTATION:  return self.group_annotation_editor.set_group_annotation;   break;
      case CONTENT_ENUM_OBJECT_ANNOTATION: return self.object_annotation_editor.set_object_annotation; break;
      case CONTENT_ENUM_GROUP_TRANSITION:  return self.group_transition_editor.set_group_transition;   break;
      case CONTENT_ENUM_OBJECT_TRANSITION: return self.object_transition_editor.set_object_transition; break;
      case CONTENT_ENUM_CAMERA_TARGET:     return self.camera_target_editor.set_camera_target;         break;
    }
  }

  var title_for_content = function(type)
  {
    switch(type)
    {
      case CONTENT_ENUM_DOMAIN:            return "domain";            break;
      case CONTENT_ENUM_GROUP:             return "group";             break;
      case CONTENT_ENUM_OBJECT:            return "object";            break;
      case CONTENT_ENUM_ANNOTATION:        return "annotation";        break;
      case CONTENT_ENUM_GROUP_ANNOTATION:  return "group_annotation";  break;
      case CONTENT_ENUM_OBJECT_ANNOTATION: return "object_annotation"; break;
      case CONTENT_ENUM_GROUP_TRANSITION:  return "group_transition";  break;
      case CONTENT_ENUM_OBJECT_TRANSITION: return "object_transition"; break;
      case CONTENT_ENUM_CAMERA_TARGET:     return "camera_target";     break;
    }
  }

  self.edit_content = function(type,i)
  {
    self.edit_type = type;
    self.cur_selected_i = i;
    self.edit_mode = EDIT_MODE_ENUM_INDIVIDUAL;
    var o = list_for_content(self.edit_type)[i];
    edset_for_content(self.edit_type)(o);
    if(!o.name || o.name == "")
    {
      editor_for_content(self.edit_type).name_editor.activate(0,self.selection_box_h);
    }
  }

  var contents = []; //hacked "list" for selector selector
  for(var i = 0; i < CONTENT_ENUM_COUNT; i++)
    contents.push({name:title_for_content(i)});

  self.editable_list = new editable_list(self);
  self.editable_list.hovered = function(i,del){};//ignore
  self.editable_list.selected = function(i,del)
  {
    if(i == -1) //back
    {
      switch(self.edit_type)
      {
        case CONTENT_ENUM_DOMAIN:
        case CONTENT_ENUM_GROUP:
        case CONTENT_ENUM_OBJECT:
        case CONTENT_ENUM_ANNOTATION:
        case CONTENT_ENUM_GROUP_ANNOTATION:
        case CONTENT_ENUM_OBJECT_ANNOTATION:
        case CONTENT_ENUM_GROUP_TRANSITION:
        case CONTENT_ENUM_OBJECT_TRANSITION:
        case CONTENT_ENUM_CAMERA_TARGET:
          self.edit_type = CONTENT_ENUM_NONE;
          break;
      }
    }
    else
    {
      if(self.edit_type == CONTENT_ENUM_NONE)
      {
        self.edit_type = i; //CONTENT_ENUM_...
      }
      else
      {
        var list = list_for_content(self.edit_type);

        var is_new = 0;
        if(del && i != list.length)
        {
          del_for_content(self.edit_type)(list[i]);
          calculateCacheState();
        }
        else
        {
          if(i == list.length) { gen_for_content(self.edit_type)(); is_new = 1; }
          self.edit_content(self.edit_type,i);
          if(is_new) calculateCacheState();
        }
      }
    }

    self.editable_list.selected_i = 0;
    self.editable_list.hovering_i = 0;
  };

  self.cur_selected_i = 0;

  self.domain_editor = new domain_editor(self);
  self.domain_editor.hovered = function(i){};//ignore
  self.domain_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;

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

      self.object_editor.hovering_i = 0;
      self.object_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  self.annotation_editor = new annotation_editor(self);
  self.annotation_editor.hovered = function(i){};//ignore
  self.annotation_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;

      self.annotation_editor.hovering_i = 0;
      self.annotation_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  self.group_annotation_editor = new group_annotation_editor(self);
  self.group_annotation_editor.hovered = function(i){};//ignore
  self.group_annotation_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;

      self.group_annotation_editor.hovering_i = 0;
      self.group_annotation_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  self.object_annotation_editor = new object_annotation_editor(self);
  self.object_annotation_editor.hovered = function(i){};//ignore
  self.object_annotation_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;

      self.object_annotation_editor.hovering_i = 0;
      self.object_annotation_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  self.group_transition_editor = new group_transition_editor(self);
  self.group_transition_editor.hovered = function(i){};//ignore
  self.group_transition_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;

      self.group_transition_editor.hovering_i = 0;
      self.group_transition_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  self.object_transition_editor = new object_transition_editor(self);
  self.object_transition_editor.hovered = function(i){};//ignore
  self.object_transition_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;

      self.object_transition_editor.hovering_i = 0;
      self.object_transition_editor.selected_i = 0;
      self.editable_list.hovering_i = -1;
    }
  };

  self.camera_target_editor = new camera_target_editor(self);
  self.camera_target_editor.hovered = function(i){};//ignore
  self.camera_target_editor.selected = function(i)
  {
    if(i == -1) //back btn
    {
      self.cur_selected_i = 0;
      self.edit_mode = EDIT_MODE_ENUM_LIST;

      self.camera_target_editor.hovering_i = 0;
      self.camera_target_editor.selected_i = 0;
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

  self.hover = function(evt)
  {
    switch(self.edit_mode)
    {
      case EDIT_MODE_ENUM_LIST:
        if(self.edit_type == CONTENT_ENUM_NONE)
          self.editable_list.hover(contents,0,0,0,evt);
        else
          self.editable_list.hover(list_for_content(self.edit_type),1,1,1,evt);
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        editor_for_content(self.edit_type).hover(list_for_content(self.edit_type)[self.cur_selected_i],evt);
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
        if(self.edit_type == CONTENT_ENUM_NONE)
          self.editable_list.click(contents,0,0,0,evt);
        else
          self.editable_list.click(list_for_content(self.edit_type),1,1,1,evt);
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        editor_for_content(self.edit_type).click(list_for_content(self.edit_type)[self.cur_selected_i],evt)
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
        if(self.edit_type == CONTENT_ENUM_NONE)
          self.editable_list.draw(contents,"Edit:",0,0,0,ctx);
        else
          self.editable_list.draw(list_for_content(self.edit_type),title_for_content(self.edit_type),1,1,1,ctx);
        break;
      case EDIT_MODE_ENUM_INDIVIDUAL:
        editor_for_content(self.edit_type).draw(list_for_content(self.edit_type)[self.cur_selected_i],ctx);
        break;
    }
  }

}

var timeline_editor = function(editor)
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

  self.visible_t = 1;
  self.hovering_i = -1;
  self.selected_i = -1;

  var ENUM;

  self.hovered = function(i){}; //for self use- not currently necessary

  self.hover = function(evt)
  {
    var old_hovering_i = self.hovering_i;
    self.hovering_i = -1;
    var hover_test = 0;

    var off_y = 0;
    var box_y;

    //add domain
    box_y = self.y+off_y;
    if(fWithin(box_y,box_y+self.selection_box_h,evt.doY)) self.hovering_i = hover_test;
    hover_test++;
    off_y += self.selection_box_h;

    for(var i = 0; i < domains.length; i++)
    {
      //domain
      box_y = self.y+off_y;
      if(fWithin(box_y,box_y+self.selection_box_h,evt.doY)) self.hovering_i = hover_test;
      hover_test++;
      off_y += self.selection_box_h;

      if(i > 0)
      {
        //add group to domain
        box_y = self.y+off_y;
        if(fWithin(box_y,box_y+self.selection_box_h,evt.doY)) self.hovering_i = hover_test;
        hover_test++;
        off_y += self.selection_box_h;
      }

      for(var j = 0; j < domain_groups_cached[i].length; j++)
      {
        //group
        box_y = self.y+off_y;
        if(fWithin(box_y,box_y+self.selection_box_h,evt.doY)) self.hovering_i = hover_test;
        hover_test++;
        off_y += self.selection_box_h;
      }
    }

    if(self.hovering_i != old_hovering_i) self.hovered(self.hovering_i);
  }

  self.unhover = function(evt)
  {
    self.hovering_i = -1;
  }

  self.click = function(evt)
  {
    if(self.hovering_i == -1) return;

    var hover_test = 0; //to match with self.hovering

    var off_y = 0;
    var box_y;

    //add domain
    box_y = self.y+off_y;
    if(self.hovering_i == hover_test)
    {
      ndomain();
      editor.edit_content(CONTENT_ENUM_DOMAIN,domains.length-1);
      calculateCacheState();
    }
    hover_test++;
    off_y += self.selection_box_h;

    for(var i = 0; i < domains.length; i++)
    {
      //domain
      box_y = self.y+off_y;
      if(self.hovering_i == hover_test)
      {
        if(domains[i].id != 0) editor.edit_content(CONTENT_ENUM_DOMAIN,i);
      }
      hover_test++;
      off_y += self.selection_box_h;

      if(i > 0)
      {
        //add group to domain
        box_y = self.y+off_y;
        if(self.hovering_i == hover_test)
        {
          if(domains[i].id != 0)
          {
            var g = ngroup();
            g.domain = domains[i].id;
            editor.edit_content(CONTENT_ENUM_GROUP,groups.length-1);
            calculateCacheState();
          }
        }
        hover_test++;
        off_y += self.selection_box_h;
      }

      for(var j = 0; j < domain_groups_cached[i].length; j++)
      {
        //domain group
        box_y = self.y+off_y;
        if(self.hovering_i == hover_test)
        {
          var g = groups[domain_groups_cached[i][j].cached_i];
          if(g.id != 0) editor.edit_content(CONTENT_ENUM_GROUP,g.cached_i);
        }
        hover_test++;
        off_y += self.selection_box_h;
      }
    }
  }

  self.draw = function(ctx)
  {
    ctx.fillStyle = black;
    ctx.strokeStyle = black;
    ctx.font = self.font_size+"px "+self.font_face;
    ctx.textAlign = "left";

    var hover_test = 0; //to match with self.hovering

    var old_h = self.h;
    self.h = self.selection_box_h+
    (domains.length*2-1)*self.selection_box_h+
    groups.length*self.selection_box_h;
    self.y -= self.h-old_h;

    strokeBox(self,ctx);

    var off_y = 0;
    var box_y;
    var name;

    //add domain
    box_y = self.y+off_y;
    if(self.hovering_i == hover_test)
    {
      var oldStyle = ctx.fillStyle;
      ctx.fillStyle = self.hover_bg_color;
      ctx.fillRect(self.x,box_y,self.w,self.selection_box_h);
      ctx.fillStyle = oldStyle;
    }
    drawLine(self.x,box_y+self.selection_box_h,self.x+self.w,box_y+self.selection_box_h,ctx);
    ctx.fillText("+",self.x+self.selection_box_text_off_x,box_y+self.selection_box_text_off_y);
    hover_test++;
    off_y += self.selection_box_h;

    for(var i = 0; i < domains.length; i++)
    {
      //domain
      box_y = self.y+off_y;
      if(self.hovering_i == hover_test)
      {
        var oldStyle = ctx.fillStyle;
        ctx.fillStyle = self.hover_bg_color;
        ctx.fillRect(self.x,box_y,self.w,self.selection_box_h);
        ctx.fillStyle = oldStyle;
      }
      drawLine(self.x,box_y+self.selection_box_h,self.x+self.w,box_y+self.selection_box_h,ctx);
      name = "(No Domain)";
      if(domains[i].name && domains[i].name != "") name = domains[i].name;
      ctx.fillText(name,self.x+self.selection_box_text_off_x,box_y+self.selection_box_text_off_y);
      hover_test++;
      off_y += self.selection_box_h;

      if(i > 0)
      {
        //add group to domain
        box_y = self.y+off_y;
        if(self.hovering_i == hover_test)
        {
          var oldStyle = ctx.fillStyle;
          ctx.fillStyle = self.hover_bg_color;
          ctx.fillRect(self.x,box_y,self.w,self.selection_box_h);
          ctx.fillStyle = oldStyle;
        }
        drawLine(self.x,box_y+self.selection_box_h,self.x+self.w,box_y+self.selection_box_h,ctx);
        ctx.fillText("+",self.x+self.selection_box_h+self.selection_box_text_off_x,box_y+self.selection_box_text_off_y);
        hover_test++;
        off_y += self.selection_box_h;
      }

      for(var j = 0; j < domain_groups_cached[i].length; j++)
      {
        //group
        box_y = self.y+off_y;
        if(self.hovering_i == hover_test)
        {
          var oldStyle = ctx.fillStyle;
          ctx.fillStyle = self.hover_bg_color;
          ctx.fillRect(self.x,box_y,self.w,self.selection_box_h);
          ctx.fillStyle = oldStyle;
        }

        var group_i = 0;
        for(var k = 0; k < groups.length; k++)
          if(domain_groups_cached[i][j].id == groups[k].id)
            group_i = k;

        ctx.fillStyle = groups[group_i].color;
        if(!group_transitions_cached[group_i].length)
        {
          ctx.fillRect(self.x,box_y,self.w,self.selection_box_h);
        }
        else
        {
          var cur_in = 0;
          var in_t = 0;
          var gts = group_transitions_cached[group_i];
          var gt;
          for(var k = 0; k < gts.length; k++)
          {
            gt = gts[k];
            if(!cur_in && gt.direction == TRANSITION_DIRECTION_ENUM_IN)
            {
              cur_in = 1;
              in_t = gt.t;
            }
            else if(cur_in  && gt.direction == TRANSITION_DIRECTION_ENUM_OUT)
            {
              var x = lerp(self.x,self.x+self.w,in_t/(t_breadth+1));
              var w = lerp(self.x,self.x+self.w,gt.t/(t_breadth+1))-x;
              ctx.fillRect(x,box_y,w,self.selection_box_h);
              cur_in = 0;
            }
          }
          if(cur_in)
          {
            var x = lerp(self.x,self.x+self.w,in_t/(t_breadth+1));
            var w = self.x+self.w-x;
            ctx.fillRect(x,box_y,w,self.selection_box_h);
          }
        }
        ctx.fillStyle = black;

        drawLine(self.x,box_y+self.selection_box_h,self.x+self.w,box_y+self.selection_box_h,ctx);
        name = "(No Group)";
        if(domain_groups_cached[i][j].name && domain_groups_cached[i][j].name != "") name = domain_groups_cached[i][j].name;
        ctx.fillText(name,self.x+self.selection_box_h+self.selection_box_text_off_x,box_y+self.selection_box_text_off_y);
        hover_test++;
        off_y += self.selection_box_h;
      }
    }
  }

}

var drawState = function()
{

}

