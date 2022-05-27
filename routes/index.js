var express = require('express');
var router = express.Router();
const users = require("../controllers/giftCardController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/user/register", users.createUser);
router.get("/registered/users", users.getUser); 

module.exports = router;
