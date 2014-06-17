var SideComments = require('side-comments');

$(document).ready(function(){

  function initSideComments( existingComments ) {
    sideComments = new SideComments(
      '#commentable-container',
      {
        id: 1,
        avatarUrl: "http://f.cl.ly/items/0s1a0q1y2Z2k2I193k1y/default-user.png",
        name: "You"
      },
      existingComments
    );
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

  $(window).on('scroll', function( event ) {
    var $overlay = $('#header .overlay');
    var $body = $('body');

    console.log('inside scroll cb');

    if ($(window).scrollTop() >= $overlay.offset().top + $overlay.height()) {
      $('body').addClass('fixed-navbar');
    } else {
      $('body').removeClass('fixed-navbar');
    }
  });

});