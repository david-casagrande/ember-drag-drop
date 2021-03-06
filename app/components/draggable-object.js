import Ember from 'ember';
import log from '../helpers/log';

export default Ember.Component.extend({
  tagName: "div",
  classNames: ["draggable-object"],
  classNameBindings: ["isDraggingObject"],
  attributeBindings: ['draggable'],

  draggable: function() {
    return "true";
  }.property(),

  handleDragStart: function(event) {
    log("handleDragStart");
console.log('sup');
    var dataTransfer = event.dataTransfer;

    var obj = this.get('content');
    var id = this.get('coordinator').setObject(obj, {source: this});

    dataTransfer.setData('Text', id);

    obj.set('isDraggingObject',true);
    this.set('isDraggingObject',true);
  }.on("dragStart", "touchStart"),

  handleDragEnd: function() {
console.log('peace');
    log("handleDragEnd");
    this.set('content.isDraggingObject',false);
    this.set('isDraggingObject',false);
  }.on("dragEnd", "touchEnd"),

  actions: {
    selectForDrag: function() {
      log("selectForDrag");
      var obj = this.get('content');
      var hashId = this.get('coordinator').setObject(obj, {source: this});
      this.get('coordinator').set("clickedId",hashId);
    }
  }
});
