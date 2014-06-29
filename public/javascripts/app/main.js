var attachFastClick = require('fastclick');
attachFastClick(document.body);

var existingComments = [
  {
    "sectionId": "1",
    "comments": [
      {
        "authorAvatarUrl": "http://f.cl.ly/items/1W303Y360b260u3v1P0T/jon_snow_small.png",
        "authorName": "Jon Sno",
        "comment": "I'm Ned Stark's bastard. Related: I know nothing."
      },
      {
        "authorAvatarUrl": "http://f.cl.ly/items/2o1a3d2f051L0V0q1p19/donald_draper.png",
        "authorName": "Donald Draper",
        "comment": "I need a scotch."
      }
    ]
  },
  {
    "sectionId": "3",
    "comments": [
      {
        "authorAvatarUrl": "http://f.cl.ly/items/0l1j230k080S0N1P0M3e/clay-davis.png",
        "authorName": "Senator Clay Davis",
        "comment": "These Side Comments are incredible. Sssshhhiiiiieeeee."
      }
    ]
  }
];

var SideComments = require('side-comments');

$(document).ready(function(){

  // Init side-comments.
  var sideComments = new SideComments(
    '#commentable-container',
    {
      id: 1,
      avatarUrl: "http://f.cl.ly/items/0s1a0q1y2Z2k2I193k1y/default-user.png",
      name: "You"
    },
    existingComments
  );

  // Bind comments posted.
  sideComments.on('commentPosted', function( comment ) {
    comment.id = parseInt(Math.random() * (1000000 - 1) + 1);
    sideComments.insertComment(comment);
  });

  // Bind deleted comments.
  sideComments.on('commentDeleted', function( comment ) {
    sideComments.removeComment(comment.sectionId, comment.id);
  });

  // Fixed nav on scroll.
  $(window).on('scroll', function( event ) {
    var $overlay = $('#header .overlay');
    var $body = $('body');
    var fixedClass = 'fixed-nav';

    if ($(window).scrollTop() >= $overlay.offset().top + $overlay.height()) {
      $('body').addClass(fixedClass);
    } else {
      $('body').removeClass(fixedClass);
    }
  });

  $('#mobile-menu-btn').on('click', function( event ) {
    event.preventDefault();
    $('body').addClass('show-mobile');
  });

  $(document).on('click', '.show-mobile #nav ul a, .show-mobile #nav .logo, #close-nav-overlay', function( event ) {
    var $target = $(event.target);
    if ($target.attr('id') == 'close-nav-overlay') {
      event.preventDefault();
    }
    $('body').removeClass('show-mobile');
  });

});