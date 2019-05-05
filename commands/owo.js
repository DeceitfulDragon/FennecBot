

const request = require('request');
const apiURL = 'https://rra.ram.moe/i/r?type=owo'

exports.run = (client, message) => {

    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var body = JSON.parse(body)
			return message.channel.send(`https://rra.ram.moe${body.path}`);
        }
    })

};