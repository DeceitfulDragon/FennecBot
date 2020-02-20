const request = require('request');
const apiURL = 'https://catfact.ninja/fact'

module.exports = {
    name: 'catfact',
    description: 'Get a random Cat Fact! (From catfact.ninja)',
    aliases: ['cfact'],
    usage: '//catfact',
    cooldown: 1,
    execute(client, message, args) {

        request(apiURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body)
                var fact = info.fact
                return message.channel.send(fact);
            }
        })
    },
};