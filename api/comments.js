const express = require('express');
const router = express.Router();
// bring in the item model
const Comment = require('../models/Comment');

// GET request to api/items, public access
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments));
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
            .then(() => res.json({success: true}))
            )
            .catch(err => res.status(404).json({success: false}));
});


// UPDATE request to api/comments/id
router.put('/:id', function(req, res) {
    var conditions = { _id : req.params.id };
    Comment.update(conditions, req.body).then(doc => {
        if (!doc){
            return res.status(404).end();
        }
        else{
            return res.status(200).json(doc);
        }
    }).catch(err => next(err));
});


module.exports = router;