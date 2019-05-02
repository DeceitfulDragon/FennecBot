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
		const total = dieResult + dieResult2 + dieResult3;

		const dieEmbed = new Discord.RichEmbed()
			.setColor(client.config.color)
			.setAuthor(`${max}-Sided Dice.`)
			.addField(`Die A`, `Rolled a(n) **${dieResult}**`)
			.addField(`Die B`, `Rolled a(n) **${dieResult2}**`)
			.addField(`Die C`, `Rolled a(n) **${dieResult3}**`)
			.addField(`Total`, `**${total}**`)
			.setFooter(`Rolled by ${message.author.username}`, message.author.avatarURL);
		return message.channel.send(dieEmbed);
	}
};