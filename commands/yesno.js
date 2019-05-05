const Discord = require("discord.js");
const request = require('request');
const apiURL = 'https://yesno.wtf/api/'

exports.run = (client, message) => {

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

};