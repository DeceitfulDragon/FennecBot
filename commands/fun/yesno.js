const Discord = require("discord.js");
const request = require('request');
const apiURL = 'https://yesno.wtf/api/'

module.exports = {
    name: 'yesno',
    description: 'Get a response of yes or no.',
    usage: '//yesno',
    cooldown: 2,
    execute(client, message, args) {

        request(apiURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body)
                var image = info.image

                const yesnoEmbed = new Discord.RichEmbed()
                    .setColor(client.config.color)
                    .setAuthor("Answer: " + info.answer)
                    .setImage(image)

                return message.channel.send(yesnoEmbed);
            }
        })
    },
};