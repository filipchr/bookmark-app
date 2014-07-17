var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#bookmarks',

  events: {
    'click #add': 'addBookmark'
  },
  
  addBookmark: function(e) {
    e.preventDefault();

    var formData = {};

    $( '#addBookmark div' ).children( 'input' ).each( function( i, el ) {
      if( $( el ).val() != '' ) {
        formData[ el.id ] = $( el ).val();
      }
    });
    this.collection.add( new app.Bookmark( formData ) );
  },
  
  initialize: function( initialBookmarks ) {
    this.collection = new app.Library( initialBookmarks );
    this.listenTo( this.collection, 'add', this.renderBookmarks );
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