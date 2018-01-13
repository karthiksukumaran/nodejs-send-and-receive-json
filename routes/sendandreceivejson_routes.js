'use strict';


var express = require('express');
var helloWorldRouter = require('../controllers/sendandreceivejson_controller.js');

var router = module.exports = express.Router();

router.post("/sendandreceivejson", helloWorldRouter.sendAndReceiveJSON);