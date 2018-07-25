const express = require('express');
const router = express.Router();
let posts = require('posts');

router.get('/:id', function(req, res){
	let id = req.params.id;
	res.render('post.ejs', {post: posts[id - 1]});
});

module.exports = router;