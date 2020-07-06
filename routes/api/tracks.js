const express = require('express');
const router = express.Router();
const Track = require('../../models/Track');
const passport = require("passport");

// test
router.get("/test", (req, res) => res.json({ msg: "This is the tracks route" }));

// tracks index: return all tracks
router.get("/", (req, res) => {
  Track
    .find()
    .sort({ date: -1 })
    .then(tracks => res.json(tracks))
    .catch(err => res.status(400).json(err))
});

// tracks user's show
router.get("/user/:user_id", (req, res) => {
  Track
    .find({user: req.params.user_id})
    .sort({ date: -1 })
    .then(tracks => res.json(tracks))
    .catch(err => res.status(400).json(err))
});

// tracks create
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  // attach user to track
  const track = new Track({
    user: req.user.id
  });

  // populate blocks
  track.blocks = req.body.blocks.map(block => block.id);
  track.save();
  res.json('Created new track.');
});

// tracks edit
router.patch('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {

});

module.exports = router;