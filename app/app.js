const express = require('express');
const bosyParser = require('body-parser');

const App = express();

const Product = require('./routes/product');

App.use(bosyParser.json());
App.use(bosyParser.urlencoded({ extended: false }));

App.use('/product', Product);

module.exports = App;