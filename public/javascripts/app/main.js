var existingComments = [
  {
    "sectionId": "1",
    "comments": [
      {
        "authorAvatarUrl": "public/images/jon_snow.png",
        "authorName": "Jon Sno",
        "authorUrl": "http://en.wikipedia.org/wiki/Kit_Harington",
        "authorId": 1,
        "comment": "I'm Ned Stark's bastard. Related: I know nothing."
      },
      {
        "id": 112,
        "authorAvatarUrl": "public/images/donald_draper.png",
        "authorName": "Donald Draper",
        "comment": "I need a scotch."
      }
    ]
  },
  {
    "sectionId": "3",
    "comments": [
      {
        "authorAvatarUrl": "public/images/clay_davis.png",
        "authorName": "Senator Clay Davis",
        "comment": "These Side Comments are incredible. Sssshhhiiiiieeeee.",
        "authorId": 3
      }
    ]
  }
];

$(document).ready(function(){
  FastClick(document.body);

  // Init side-comments.
  var sideComments = new SideComments(
    '#commentable-container',
    {
      id: 1,
      avatarUrl: "public/images/user.png",
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