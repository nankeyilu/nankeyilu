const request = require('request');

exports.handler = function(event, context, callback) {
  var e = JSON.parse(event.body);
  if (e.payload.context == "production") {
    console.log("[google-pubsubhubbub] Preparing to ping pubsubhubbub.appspot.com")
    request.post({
      url: "http://pubsubhubbub.appspot.com/",
      form: {"hub.mode": "publish", "hub.url": "https://nanke.suste.ch/atom.xml"}
      },
      function (error, response, body){
        if (!error && response.statusCode == 204) {
          console.log("[google-pubsubhubbub] ping successful");
          callback(null, {statusCode: 204});
        } else {
          console.log("[google-pubsubhubbub] ping failed:", error);
          callback(error, {statusCode: response.statusCode});
        }
      }
    );
  }
}
