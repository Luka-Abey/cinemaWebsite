const express = require('express');
const router = express.Router();
// bring in the item model
const Comment = require('../models/Comment');
// GET request to api/items, public access
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => {
          res.json(comments);
        });
});
router.route("/:id").get(function(req, res) {
    Comment.find({ "movieId": req.params.id }, function(err, comments) {
      if (err) {
        console.log(err);
      } else {
        res.json(comments);
      }
    });
  });

// POST request to api/items, public access
router.post('/', ({body}, res) => {
    const newComment = new Comment(body);
    newComment.save()
        .then(comment => res.json(comment)
        )
        .catch(err => res.status(404).json({success: false}));
});

// DELETE request to api/items, public access
router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => comment.remove()
            .then(() => res.status(200).json({success: true}))
            )
            .catch(err => res.status(404).json({success: false}));
});
module.exports = router;