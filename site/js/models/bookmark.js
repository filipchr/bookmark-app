var app = app || {};

app.Bookmark = Backbone.Model.extend({
  defaults : {
    title: 'No Title atm',
    url: 'No Url atm',
    keywords: 'None'
  }
});