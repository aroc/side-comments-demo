var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('homepage', { title: 'Express' });
});

/* GET comments. */
router.get('/comments', function(req, res) {
  var existingComments = [
    {
      "sectionId": "1",
      "comments": [
        {
          "authorAvatarUrl": "https://d262ilb51hltx0.cloudfront.net/fit/c/64/64/0*bBRLkZqOcffcRwKl.jpeg",
          "authorName": "Eric Anderson",
          "comment": "Hey there!"
        },
        {
          "authorAvatarUrl": "https://d262ilb51hltx0.cloudfront.net/fit/c/64/64/0*bBRLkZqOcffcRwKl.jpeg",
          "authorName": "Jim Beam",
          "comment": "I'm drunk!"
        }
      ]
    },
    {
      "sectionId": "3",
      "comments": [
        {
          "authorAvatarUrl": "https://d262ilb51hltx0.cloudfront.net/fit/c/64/64/0*bBRLkZqOcffcRwKl.jpeg",
          "authorName": "Jim Beam",
          "comment": "I'm drunk!"
        }
      ]
    }
  ];

  res.send(existingComments);
});

module.exports = router;