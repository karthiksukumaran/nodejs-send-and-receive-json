'use strict';

module.exports = {
    sendAndReceiveJSON : sendAndReceiveJSON
}


function sendAndReceiveJSON(request, response) {
    //Below line is used to receive the JSON Data sent as Body
    var requestBody = request.body;
    console.log(" input received :: ", requestBody);

    //Below we are preparing the output that has to be returned
    var responseJSON = {};
    responseJSON.output = "This is the output message";
    response.status(200).send(responseJSON);
}