const request = require('request');
const apiURL = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

exports.run = (client, message) => {

    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)
            var trump = info.message
            message.channel.send('"' + trump + '"')
        }
    })

};