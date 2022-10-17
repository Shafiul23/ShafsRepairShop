const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

//^ is for start of string. $ is for end of string. If the route is not just '/', it looks for index, where the html is optional.

module.exports = router;