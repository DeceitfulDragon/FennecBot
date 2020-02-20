const request = require('request');
const apiURL = 'https://rra.ram.moe/i/r?type=owo'

module.exports = {
    name: 'owo',
    description: 'owo',
    aliases: ['uwu'],
    usage: '//owo',
    cooldown: 1,
    execute(client, message, args) {

        request(apiURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body)
                return message.channel.send(`https://rra.ram.moe${body.path}`);
            }
        })
    },
};