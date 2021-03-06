var app = app || {};

app.BookmarkView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookmarkContainer',
  template: _.template( $('#bookmarksTemplate').html() ),

  events: {
    'click .delete' : 'deleteBookmark'
  },

  deleteBookmark: function() {
    // delete model
    this.model.destroy();

    // delete view
    this.remove();
  },
  render: function() {
    //tmpl is a function that takes a JSON object and returns html
    
    // this.el is wat we define in tagName. use $el to get access 
    // to jQuery html() function
    this.$el.html( this.template( this.model.toJSON() ) );

    return this;
  }

});