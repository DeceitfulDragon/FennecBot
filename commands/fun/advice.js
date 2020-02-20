const request = require('request');
const apiURL = 'https://api.adviceslip.com/advice'

module.exports = {
    name: 'advice',
    description: 'Get some advice',
    usage: '//advice',
    cooldown: 1,
    execute(message, args) {

        request(apiURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body)
                var adv = info.slip.advice
                return message.channel.send(adv);
            }
        })
    },
};