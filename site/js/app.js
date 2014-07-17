var app = app || {};

$(function() {
  var bookmarks = [
    {title: 'Google.se', url: 'www.google.se', keywords: 'Searchengin, daily use'},
    {title: 'Facebook', url: 'www.facebook.se', keywords: 'Social network, daily use'},
    {title: 'aftonbladet', url: 'www.aftonbladet.se', keywords: 'Newspaper'}
  ];

  new app.LibraryView( bookmarks );
});