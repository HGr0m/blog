const express = require('express');
const router = express.Router();
let posts = require('posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', {posts: posts});
});

module.exports = router;
