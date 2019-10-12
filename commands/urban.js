const urban = require('urban');
const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var query = urban(args);

    query.first(function (urban) {

        const urbanEmbed = new Discord.RichEmbed()
            .setTitle(`:red_circle: Query: ${urban.word}`)
            .setDescription(urban.definition)
            .addField(`:red_circle: Example:`, urban.example)
            .addField(`:red_circle: Author:`, `**${urban.author}** @ ${urban.written_on}`)
            .addField(`:thumbsup:`, `${urban.thumbs_up}`, true)
            .addField(`:thumbsdown:`, `${urban.thumbs_down}`, true)
            .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL)
            .setColor("#0330fc");

        return message.channel.send(urbanEmbed);
    });

};