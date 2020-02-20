const Discord = require("discord.js");
const min = 1;
const max = 20;

module.exports = {
    name: 'ability',
    description: 'Rolls you a set of values for a D&D Character!',
    aliases: ['abilities'],
    usage: '//ability',
    cooldown: 5,
    execute(client, message, args) {

        var STRvalue = Math.floor(Math.random() * (max - min + 1)) + min;
        var DEXvalue = Math.floor(Math.random() * (max - min + 1)) + min;
        var CONvalue = Math.floor(Math.random() * (max - min + 1)) + min;
        var INTvalue = Math.floor(Math.random() * (max - min + 1)) + min;
        var WISvalue = Math.floor(Math.random() * (max - min + 1)) + min;
        var CHAvalue = Math.floor(Math.random() * (max - min + 1)) + min;

        const abilityEmbed = new Discord.RichEmbed()
            .setColor(client.config.color)
            .setAuthor(`Ability Score Roller`)
            .setDescription(`**STR:** ${STRvalue}\n**DEX:** ${DEXvalue}\n**CON:** ${CONvalue}\n**INT:** ${INTvalue}\n**WIS:** ${WISvalue}\n**CHA:** ${CHAvalue}`)
            .setFooter(`Called by ${message.author.username}`, message.author.avatarURL);
        return message.channel.send(abilityEmbed);


    },
};