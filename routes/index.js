var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET comments. */
router.get('/comments', function(req, res) {
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

  res.send(existingComments);
});

module.exports = router;