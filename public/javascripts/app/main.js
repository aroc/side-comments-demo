var SideComments = require('side-comments');

$(document).ready(function(){

  function initSideComments( existingComments ) {
    sideComments = new SideComments('#commentable-container', existingComments);
    sideComments.on('commentPosted', function( comment ) {
      comment.id = parseInt(Math.random() * (1000000 - 1) + 1);
      sideComments.insertComment(comment);
    });
  }

  $.ajax({
    url: 'http://localhost:3000/comments',
    type: 'GET',
    success: function( results ) {
      initSideComments(results);
    },
    error: function( xhr, status, error ) {
      console.log('Oh noes! An error!');
    }
  });

});