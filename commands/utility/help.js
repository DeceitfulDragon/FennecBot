const Discord = require('discord.js');
//const { commands } = require('../fennec.js');
const { stripIndents } = require('common-tags');

module.exports = {
    name: 'help',
    description: 'List all commands or get info on a specific one.',
    aliases: ['commands'],
    usage: '//help [command]',
    cooldown: 100,
    execute(client, message, args) {

       const { commands } = message.client;

        if (!args.length) {

            const commandEmbed = new Discord.RichEmbed()
                .setTitle(":large_orange_diamond: FennecBot Command List:")
                .setColor(client.config.color)
                .setFooter(`Called by ${message.author.username}`, message.author.avatarURL)
                .setDescription(stripIndents`

                    ${commands.map(command => command.name).join(', ')}

                    :ballot_box_with_check: **That makes a total of ${commands.size} commands!**

                    You can do //help <command> for info on a specific command.
            `);

            return message.channel.send(commandEmbed);

        } else {

            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));


            if (!command) return message.reply('that\'s not a valid command!');

            const helpEmbed = new Discord.RichEmbed()
                .setTitle(`Command: ${command.name}`)
                .setColor(client.config.color)
                .setFooter(`Called by ${message.author.username}`, message.author.avatarURL)
                .addField(`Description:`, command.description)
                .addField(`Usage:`, command.usage)
            if (command.aliases) helpEmbed.addField(`Aliases`, command.aliases.join(', '))

            helpEmbed.addField(`Cooldown`, `${command.cooldown} minute(s)`);
                
            return message.channel.send(helpEmbed);
        }
    },
};