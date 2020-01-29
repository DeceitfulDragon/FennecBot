const Discord = require("discord.js");
const verificationLevels = ['None', 'Low', 'Medium', '(?°?°??? ???', '??? ??(???)?????']
const explicitContentFilters = ['None', 'Scan messages from those without a role', 'Scan all messages']

exports.run = (client, message) => {


	/*const svinfo = new Discord.RichEmbed()
		.setColor(client.config.color)
		.addField("Server Name:", message.guild.name, true)
		.addField("Server Owner:", message.guild.owner, true)
		.addField("Total Members:", message.guild.memberCount, true)
		.addField("Server Region:", message.guild.region, true)
		.addField("Server Verification Level:", `${verificationLevels[message.guild.verificationLevel]}`, false)
		.addField("Server Content Filter:", `${explicitContentFilters[message.guild.explicitContentFilter]}`, false)
		.addField("Created On:", message.guild.createdAt)
		.addField("FennecBot Joined:", message.guild.joinedAt)
		.addField("Emojis", `${message.guild.emojis.size}`)
		.setThumbnail(message.guild.iconURL);*/
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTitle('Server Info')
        .setThumbnail(message.guild.iconURL)
        .addField(':arrow_right: Name', message.guild.name, true)
        .addField(':arrow_right: ID', message.guild.id, true)
        .addField(':arrow_right: Region', message.guild.region.toUpperCase(), true)
        .addField(':arrow_right: Creation Date', message.guild.createdAt.toDateString(), true)
        .addField(':arrow_right: Owner', message.guild.owner.user.tag, true)
        .addField(':arrow_right: Members', message.guild.memberCount, true)
        .addField(':arrow_right: Roles', message.guild.roles.map(role => role.toString()).join(' **|** '), true)
        .addField(':arrow_right: Categories', message.guild.channels.filter(channel => channel.type === 'category').map(category => category.toString()).join(' **|** '), true)
        .addField(':arrow_right: Channels', message.guild.channels.filter(channel => channel.type !== 'category').map(channel => channel.toString()).join(' **|** '), true);

    return message.channel.send(embed);

	return message.channel.send(svinfo);
};
	
	

