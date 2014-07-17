var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#bookmarks',
  initialize: function( initialBookmarks ) {
    this.collection = new app.Library( initialBookmarks );
    this.render();
  },

  render: function() {
    this.collection.each( function( item ) {
      this.renderBookmarks( item );
    }, this);
  },

  renderBookmarks: function( item ) {

    var bookmarkView = new app.BookmarkView({
      model: item
    });
    
    this.$el.append( bookmarkView.render().el );
  }

});