const request = require('request');
const apiURL = 'https://api.adviceslip.com/advice'

exports.run = (client, message) => {

    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)
            var adv = info.slip.advice
            message.channel.send(adv)
        }
    })

};