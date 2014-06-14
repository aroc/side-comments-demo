var SideComments = require('side-comments');

$(document).ready(function(){

  function getComments( existingComments ) {
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
  }

  function initSideComments( existingComments ) {
    sideComments = new SideComments(
      '#commentable-container',
      {
        id: githubUser.id,
        avatarUrl: githubUser.avatar_url,
        name: githubUser.name
      },
      existingComments
    );
    sideComments.on('commentPosted', function( comment ) {
      comment.id = parseInt(Math.random() * (1000000 - 1) + 1);
      sideComments.insertComment(comment);
    });
  }

  var githubUser = new Gh3.User("aroc");
  githubUser.fetch(function( err, res ) {
    if (err) {
      // TODO: Throw an error, "Couldn't find a user with that username. Try again."
    } else {
      getComments();
    }
  });


});