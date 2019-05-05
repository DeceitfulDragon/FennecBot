const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message) => {

    randomPuppy()
        .then(url => {
			const dogEmbed = new Discord.RichEmbed()
				.setAuthor("Random Dog")
				.setImage(url)
				.setColor(client.config.color);
            return message.channel.send(dogEmbed);
        })
};