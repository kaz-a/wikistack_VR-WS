const express = require( 'express' );
const router = express.Router();


router.get('/', function(req, res, next) {
  res.send('got to GET /users/');
});

router.get('/:id', function(req, res, next) {
  res.send('got to GET /users/:id');
});

router.put('/:id', function(req, res, next) {
  res.send('got to put /users/:id');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /users/');
});

router.delete('/:id', function(req, res, next) {
  res.send('got to delete /users//:id');
});

module.exports = router
