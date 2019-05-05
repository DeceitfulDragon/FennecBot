const Discord = require("discord.js");
const request = require('request');
const apiURL = 'http://aws.random.cat/meow'

exports.run = (client, message) => {

    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)
			var image = info.file

			const catEmbed = new Discord.RichEmbed()
				.setColor(client.config.color)
				.setAuthor(`Random Cat`)
				.setImage(image)
			return message.channel.send(catEmbed);
     
        }
    })

};