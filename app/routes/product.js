const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/', ProductCtrl.index) //api.cim/product/
    .post('/', ProductCtrl.create) //api.cim/product/
    .get('/:key/:value', ProductCtrl.find, ProductCtrl.show) //api.cim/product/category/Hogar
    .put('/:key/:value', ProductCtrl.find, ProductCtrl.update) //api.com/product/name/SamsungGalaxy
    .delete('/:key/:value', ProductCtrl.find, ProductCtrl.remove); // api.com/product/name/SansungGAlaxy

module.exports = Router;