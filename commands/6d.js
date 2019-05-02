const Discord = require("discord.js");
const min = 1
exports.run = (client, message, args) => {

	var max = args

	if (max < 2) {
		message.channel.send("Please pick a number greater than 1.")
	} else {

		var dieResult = Math.floor(Math.random() * (max - min + 1)) + min;
		var dieResult2 = Math.floor(Math.random() * (max - min + 1)) + min;
		var dieResult3 = Math.floor(Math.random() * (max - min + 1)) + min;
		var dieResult4 = Math.floor(Math.random() * (max - min + 1)) + min;
		var dieResult5 = Math.floor(Math.random() * (max - min + 1)) + min;
		var dieResult6 = Math.floor(Math.random() * (max - min + 1)) + min;
		const total = dieResult + dieResult2 + dieResult3 + dieResult4 + dieResult5 + dieResult6;

		const dieEmbed = new Discord.RichEmbed()
			.setColor(client.config.color)
			.setAuthor(`${max}-Sided Dice.`)
			.addField(`Die A`, `Rolled a(n) **${dieResult}**`)
			.addField(`Die B`, `Rolled a(n) **${dieResult2}**`)
			.addField(`Die C`, `Rolled a(n) **${dieResult3}**`)
			.addField(`Die D`, `Rolled a(n) **${dieResult4}**`)
			.addField(`Die E`, `Rolled a(n) **${dieResult5}**`)
			.addField(`Die F`, `Rolled a(n) **${dieResult6}**`)
			.addField(`Total`, `**${total}**`)
			.setFooter(`Rolled by ${message.author.username}`, message.author.avatarURL);
		return message.channel.send(dieEmbed);
	}
};