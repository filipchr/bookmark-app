var app = app || {};

app.Bookmarks = Backbone.Model.extend({
  defaults : {
    title: 'No Title atm',
    url: 'No Url atm',
    keywords: 'None'
  }
});