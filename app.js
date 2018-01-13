'use strict';
/**
@author: Karthik Sukumaran
@version: 1.0
@Website karthiksukumaran.com
@date: 13-Jan-2017
@Description: Basic NodeJS Service Example
**/

var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var httpServer;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = [
    "sendandreceivejson_routes"
]

function setupRoutes(){
    for(var route of routes){
        app.use('/' , require("./routes/"+ route));
    }
}



function startServer() {
    try{
        var portnumber = 8888;
        setupRoutes();        
        httpServer = http.createServer(app).listen(portnumber, '0.0.0.0');
        console.log("Server started at port "+portnumber);
        console.log("URL http://localhost:"+portnumber);
    }
    catch(err){
        console.log("app.js startServer :: err :: ", err);
    }
}

startServer();