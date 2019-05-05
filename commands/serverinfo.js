const Discord = require("discord.js");
const verificationLevels = ['None', 'Low', 'Medium', '(?°?°??? ???', '??? ??(???)?????']
const explicitContentFilters = ['None', 'Scan messages from those without a role', 'Scan all messages']

exports.run = (client, message) => {


	const svinfo = new Discord.RichEmbed()
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
		.setThumbnail(message.guild.iconURL);

	return message.channel.send(svinfo);
};
	
	

