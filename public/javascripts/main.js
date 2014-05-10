$(document).ready(function(){
  var sideComments;
  $.ajax({
    url: 'http://localhost:3000/comments',
    type: 'GET',
    success: function( results ) {
      sideComments = new window.SideComments('#commentable-container', results);
    },
    error: function( xhr, status, error ) {
      console.log('Oh noes! An error!');
    }
  });
});