const Discord = require("discord.js");

const max = 122
const min = 1

module.exports = {
    name: 'fox',
    description: 'Get a random fox image!',
    usage: '//fox',
    cooldown: 2,
    execute(client, message, args) {

        var fNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const url = 'https://randomfox.ca/images/' + fNumber + '.jpg';

        const foxEmbed = new Discord.RichEmbed()
            .setColor(client.config.color)
            .setAuthor(`Random Fox (www.randomfox.ca)`)
            .setImage(url);
        return message.channel.send(foxEmbed);
    },
};
