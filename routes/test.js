const express = require('express');
const router = express.Router();

let posts = [
	{ title: 'first post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, metus vel vulputate feugiat, libero leo efficitur erat, id accumsan nulla mauris ut nulla. Nam non pharetra justo. Praesent vehicula, orci non aliquam iaculis, velit orci ullamcorper dui, nec pharetra erat est vitae mi. Suspendisse finibus luctus tellus, nec hendrerit massa luctus ut. Maecenas consequat dolor nulla, ac cursus lacus consectetur non. In vitae magna ac enim blandit imperdiet.'},
	{ title: 'second post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, metus vel vulputate feugiat, libero leo efficitur erat, id accumsan nulla mauris ut nulla. Nam non pharetra justo. Praesent vehicula, orci non aliquam iaculis, velit orci ullamcorper dui, nec pharetra erat est vitae mi. Suspendisse finibus luctus tellus, nec hendrerit massa luctus ut. Maecenas consequat dolor nulla, ac cursus lacus consectetur non. In vitae magna ac enim blandit imperdiet.'},
	{ title: 'third post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, metus vel vulputate feugiat, libero leo efficitur erat, id accumsan nulla mauris ut nulla. Nam non pharetra justo. Praesent vehicula, orci non aliquam iaculis, velit orci ullamcorper dui, nec pharetra erat est vitae mi. Suspendisse finibus luctus tellus, nec hendrerit massa luctus ut. Maecenas consequat dolor nulla, ac cursus lacus consectetur non. In vitae magna ac enim blandit imperdiet.'}
];

router.get('/test', function(req, res, next) {
	res.send('все работает');
});

module.exports = router;