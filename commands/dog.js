const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {

    randomPuppy()
        .then(url => {
            const dogEmbed = new Discord.RichEmbed()
                .setAuthor("Random Dog")
                .setImage(url)
                .setColor(client.config.color)
                .setFooter("FennecBot Version: " + client.config.botversion);
            return message.channel.send(dogEmbed);
        })
};