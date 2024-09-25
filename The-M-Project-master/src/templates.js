// Copyright (c) 2014 M-Way Solutions GmbH
// http://github.com/mwaylabs/The-M-Project/blob/absinthe/MIT-LICENSE.txt

////////////////////////////////////////////////////////////////
// DO NOT EDIT THIS FILE - it is generated by grunt
////////////////////////////////////////////////////////////////

/* jshint -W109 */
M.Templates = {"default":{"accordion.ejs":"<ul><%= value %></ul>","accordionitem.ejs":"<ul><%= value %></ul>","button.ejs":"<div class=\"button\"><% if(icon) { %> <i class=\"fa <%= icon %>\"></i> <% } %> <div data-binding=\"value\"<% if(value) {  } %>><%= value %></div></div>","buttongroup.ejs":"<div class=\"clearfix\" data-childviews=\"buttons\"></div>","checkboxlist.ejs":"<div><%= label %><div data-childviews=\"checkbox-options\"></div></div>","checkboxoption.ejs":"<label><input type=\"checkbox\" name=\"<%= name %>\" value=\"<%= value %>\"><i class=\"needsclick fa\"></i> <%= label %></label>","debug.ejs":"<div><div data-childviews=\"debug-menu\"></div><div data-childviews=\"debug-grid\"></div></div>","dialog.ejs":"<div></div>","image.ejs":"<img src=\"<%= value %>\" alt=\"<%= alt %>\"/>","label.ejs":"<div contenteditable=\"true\"><%= value %></div>","list.ejs":"<ul data-childviews=\"list\"></ul>","listitem.ejs":"<li><%= value %></li>","listitemlinked.ejs":"<li><span><%= value %></span><i class=\"fa <%= icon %>\"></i></li>","loader.ejs":"<div class=\"m-view m-overlayview m-loaderview m-loaderview-show\" style=\"display: block;\"> <div class=\"m-view m-overlayview-inner m-loaderview-inner\"> <div class=\"m-view m-labelview m-loaderview-inner-message\"></div> <div class=\"m-view m-loaderview-inner-icon m-loaderview-inner-icon-only\"> <div class=\"m-view m-loaderview-inner-icon-1\"></div> <div class=\"m-view m-loaderview-inner-icon-2\"></div> <div class=\"m-view m-loaderview-inner-icon-3\"></div> <div class=\"m-view m-loaderview-inner-icon-4\"></div> <div class=\"m-view m-loaderview-inner-icon-5\"></div> <div class=\"m-view m-loaderview-inner-icon-6\"></div> <div class=\"m-view m-loaderview-inner-icon-7\"></div> <div class=\"m-view m-loaderview-inner-icon-8\"></div> </div> </div> </div>","menu.ejs":"<div class=\"movable-backdrop fade\"></div><div class=\"movable-container\"><span><%= value %></span><div class=\"menu-content\" data-childviews=\"menu-content\"></div></div>","modal.ejs":"<div data-childviews=\"content\"><div>","model.ejs":"<ul><%= value %></ul>","movable.ejs":"<div class=\"movable-element\"><%= value %></div>","radiolist.ejs":"<div><%= label %><div data-childviews=\"radio-options\"></div></div>","radiooption.ejs":"<label><input type=\"radio\" name=\"<%= name %>\" value=\"<%= value %>\"><i class=\"needsclick fa\"></i><%= label %></label>","searchfield.ejs":"<div contenteditable=\"true\"><%= value %></div>","select.ejs":"<div class=\"selection-list<% if(isMultiple){ %> multiple<% } %>\"><select<% if(isMultiple){ %> multiple<% } %>><%= value %></select></div>","slider.ejs":"<input type=\"range\">","tabbarbuttongroup.ejs":"<div></div>","text.ejs":"<div><% if(label) {  %><div class=\"label\"><%= label %></div><% } %><div><% if(icon) {  %><div class=\"input-icon-addon\"><i class=\"fa <%= icon %> fa-fw\"></i><% } %><%= value %></div>","textarea.ejs":"<div><% if(label) {  %><label><%= label %><% } %><textarea><%= value %></textarea><% if(label) {  %></label><% } %></div>","textfield.ejs":"<div><% if(label) {  %><label><%= label %><% } %><div class=\"<% if(icon) {  %> input-icon-addon<% } %>\"><% if(icon) {  %><i class=\"fa <%= icon %> fa-fw\"></i><% } %><input type=\"<%= type %>\" <% if(placeholder) { %> placeholder=\"<%= placeholder %>\"<% } %> value=\"<%= value %>\"></div><% if(label) {  %></label><% } %></div>","toast.ejs":"<div class=\"toast\"><div id=\"<%= id %>\"><%= text %></div></div>","toggle.ejs":"<div><div data-childviews=\"first\"></div><div data-childviews=\"second\"></div></div>","toggleswitch.ejs":"<div>\n    <div class=\"toggleswitch-value-listener\" contenteditable=\"true\"><%= value %></div>\n\n    <% if(label){%>\n        <div class=\"label-descr\"> <%= label %></div>\n    <% }%>\n    <div class=\"movable-grid\">\n        <div class=\"movable-container\">\n              <% if(onLabel){%>\n                  <div class=\"on-value\"><%= onLabel %></div>\n              <% }%>\n\n              <% if(onLabel){%>\n                  <div class=\"off-value\"><%= offLabel %></div>\n              <% }%>\n\n              <% if(onLabel){%>\n                  <div class=\"movable-element\"></div>\n              <% }%>\n        </div>\n    </div>\n</div>\n\n","toolbar.ejs":"<div><div data-childviews=\"first\"></div> <div class=\"center\" data-binding=\"value\"><%= value %></div> <div data-childviews=\"second\"></div></div>","view.ejs":"<div><%= value %></div>"}};
/* jshint +W109 */