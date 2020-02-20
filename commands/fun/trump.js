const request = require('request');
const apiURL = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

module.exports = {
    name: 'trump',
    description: 'Get a real donald trump quote.',
    usage: '//trump',
    cooldown: 3,
    execute(client, message, args) {

        request(apiURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body)
                var trump = info.message
                return message.channel.send(`"${trump}" - Donald J. Trump.`);
            }
        })
    },
};