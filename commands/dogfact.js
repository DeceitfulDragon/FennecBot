const request = require('request');
const apiURL = 'https://dog-api.kinduff.com/api/facts'

exports.run = (client, message) => {

    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)
            var fact = info.facts[0]
            return message.channel.send(fact);
        }
    })

};