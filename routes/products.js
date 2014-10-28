var os = require('os');
var express = require('express');
var data = require('../data/products')
var router = express.Router();

/* GET product list */
router.get('/', function(req, res) {
  res.json(data.products);
});

/* GET product details */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  res.json(data.products[id]);
});

/* GET products in stock */
router.get('/instock/:qt', function(req, res) {
  var qt = parseInt(req.params.qt);
  var lst = [];
  for(id in data.products) {
  	var prod = data.products[id];
  	if(prod.stock >= qt) {
  	  lst.push(prod);
  	}
  }
  res.json(lst);
});

/* GET product pricing */
router.get('/:id/:qt', function(req, res) {
  var id = req.params.id;
  var qt = parseInt(req.params.qt);
  var price = parseInt(data.products[id].price);
  res.json({
  	"id": id,
  	"qt": qt,
  	"unit_price": price,
  	"total_price": price * qt
  });
});

module.exports = router;
