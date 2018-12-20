var express = require('express');
var router = express.Router();
var customer = require('../models/cutomers');

router.get('/new', renderNew);
router.get('/:id', customer.getByID, function(req, res){
  res.send(res.locals.selectedCustomers);
})

router.get('/', customer.getAll, function(req, res) {
  mustacheVariables = {
    pcustomerList: res.locals.customers
  };
  res.render('./customer/index.html', mustacheVariables);
});

module.exports = router;
