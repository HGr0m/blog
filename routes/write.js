const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let posts = require('posts');

router.get('/write', function(req, res) {
	res.render('write.ejs');
});

router.post('/write', function(req, res) {
	let title = req.body.title,
		content = req.body.content;
	posts.push({title: title, content: content});
	res.redirect('/');
});

module.exports = router;