// Require discord.js for the RichEmbed
const Discord = require("discord.js");


exports.run = (client, message) => {

    // Makes the BotInfo RichEmbed
 
	const botinfo = new Discord.RichEmbed()
		.setColor(client.config.color)
		.addField(":small_blue_diamond: FennecBot:", ":small_orange_diamond: FennecBot is a simple bot started as a JavaScript/Node.js project.")
		.addField(":small_blue_diamond: Developer:", ":small_orange_diamond: FennecBot is developed and hosted by FearTheRenegade#7276.")
		.addField(":small_blue_diamond: Github:", ":small_orange_diamond: [FennecBot Repository](https://github.com/FearTheRenegade/FennecBot)")
		.addField(":small_blue_diamond: Discord:", ":small_orange_diamond: [https://discord.gg/ESXqhha](https://discord.gg/ESXqhha)")
		.addField(":small_blue_diamond: Statistics", `:small_orange_diamond: FennecBot is currently serving **${client.users.size}** users in **${client.guilds.size}** servers`)
		.addField(":small_blue_diamond: Version:", `:small_orange_diamond: ${client.config.botversion}`);

	return message.channel.send(botinfo);

};

