const Discord = require("discord.js");

const max = 122
const min = 1

exports.run = (client, message) => {

    var fNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const url = 'https://randomfox.ca/images/' + fNumber + '.jpg';

 const foxEmbed = new Discord.RichEmbed()
        .setColor(client.config.color)
     .setAuthor(`Random Fox (www.randomfox.ca)`)
        .setImage(url)
    // Sends the RichEmbed
	return message.channel.send(foxEmbed);
};
