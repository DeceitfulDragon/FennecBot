const request = require('request');
const apiURL = 'https://catfact.ninja/fact'

exports.run = (client, message) => {

    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)
            var fact = info.fact
            return message.channel.send(fact);
        }
    })

};