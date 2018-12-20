var express = require('express');
var router = express.Router();
var car = require('../models/cars');

router.get('/new', renderNew);
router.get('/:id', car.getByID, function(req, res){
  res.send(res.locals.selectedCcar);
})

router.get('/', car.getAll, function(req, res) {
  mustacheVariables = {
    pcarsList: res.locals.cars
  };
  res.render('./cars/index.html', mustacheVariables);
});

module.exports = router;
