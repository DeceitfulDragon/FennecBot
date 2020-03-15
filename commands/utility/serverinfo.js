const Discord = require("discord.js");
const verificationLevels = ['None', 'Low', 'Medium', '(?°?°??? ???', '??? ??(???)?????']
const explicitContentFilters = ['None', 'Scan messages from those without a role', 'Scan all messages']

module.exports = {
    name: 'serverinfo',
    description: 'Get some server info',
    aliases: ['server, svinfo'],
    usage: '//serverinfo',
    cooldown: 2,
    execute(client, message, args) {

        const embed = new Discord.RichEmbed()
            .setColor(`#0000ff`)
            .setTitle('Server Info')
            .setThumbnail(message.guild.iconURL)
            .addField(':large_blue_diamond: Name:', message.guild.name, true)
            .addField(':large_blue_diamond: Owner:', message.guild.owner.user, true)
            .addField(':large_blue_diamond: Creation Date:', message.guild.createdAt.toDateString(), true)
            .addField(':large_blue_diamond: Guild ID:', message.guild.id, true)
            .addField(':large_blue_diamond: Region:', message.guild.region.toUpperCase(), true)
            .addField(':large_blue_diamond: Member Count:', message.guild.memberCount, true)
            .addField(':large_blue_diamond: Roles:', message.guild.roles.map(role => role.toString()).join(' , '), true)

        return message.channel.send(embed);
    },
};
	
	

