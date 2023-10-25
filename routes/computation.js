var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = router;
router.get('/', function(req, res, next) {
  const x = req.query.x ? parseFloat(req.query.x) : Math.random(); // Use query value or generate a random value

  // Calculate the result using Math.cosh()
  const result = Math.cosh(x);

  // Prepare the response string
  const responseString = `${Math.cosh.name} applied to ${x} is ${result}`;

  res.send(responseString);
  res.render('computation', { title: 'computation' });
});
