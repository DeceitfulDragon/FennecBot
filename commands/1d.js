const Discord = require("discord.js");
const min = 1;
exports.run = (client, message, args) => {

	var content = message.content;
	var parts = content.split(" ");
	const max = parts[1];
	var dieResult = Math.floor(Math.random() * (max - min + 1)) + min;

	var dieWeighted = dieResult + 3;
	var badDie = max - 3;
	var bonus = parseInt(parts[2]);
	var bonusTotal = bonus + dieResult;
	const nat20 = 'https://imgur.com/63XO760.png';
	const nat1 = 'https://imgur.com/fbSf7VJ.gif	';

    if (args < 2) {
        return message.channel.send("Please pick a number greater than 1.");

    } else {

        /*if (message.author.id == client.config.renegadeID) {

			if (dieResult <= badDie) {

				const dieEmbed = new Discord.RichEmbed()
					.setColor(client.config.color)
					.setAuthor(`${max}-Sided Die.`)
					.setDescription(`${message.author.username} rolled a(n) **${dieWeighted}**.`)
				if (bonus > 0) {
					dieEmbed.addField(`Bonus Total`, `${dieWeighted} + ${bonus} = **${bonusTotal}**`)
				}
				return message.channel.send(dieEmbed);

			} else {

				const dieEmbed = new Discord.RichEmbed()
					.setColor(client.config.color)
					.setAuthor(`${max}-Sided Die.`)
					.setDescription(`${message.author.username} rolled a(n) **${dieResult}**.`)
				if (bonus > 0) {
					dieEmbed.addField(`Bonus Total`, `${dieResult} + ${bonus} = **${bonusTotal}**`)
				}
				return message.channel.send(dieEmbed);

			}


		} else {*/
			if (max == 20) {
				if (dieResult == 20) {

					const dieEmbed = new Discord.RichEmbed()
						.setThumbnail(nat20)
						.setColor(client.config.color)
						.setAuthor(`${max}-Sided Die.`)
						.setDescription(`${message.author.username} rolled a **NATURAL 20**`)
					return message.channel.send(dieEmbed);

				} else if (dieResult == 1) {

					const dieEmbed = new Discord.RichEmbed()
						.setThumbnail(nat1)
						.setColor(client.config.color)
						.setAuthor(`${max}-Sided Die.`)
						.setDescription(`${message.author.username} rolled a **Natural 1**`)
					return message.channel.send(dieEmbed);

				} else {

					const dieEmbed = new Discord.RichEmbed()
						.setColor(client.config.color)
						.setAuthor(`${max}-Sided Die.`)
						.setDescription(`${message.author.username} rolled a(n) **${dieResult}**.`)
					if (bonus > 0) {
						dieEmbed.addField(`Bonus Total`, `${dieResult} + ${bonus} = **${bonusTotal}**`)
					}
					return message.channel.send(dieEmbed);

				}

			} else {

					const dieEmbed = new Discord.RichEmbed()
						.setColor(client.config.color)
						.setAuthor(`${max}-Sided Die.`)
						.setDescription(`${message.author.username} rolled a(n) **${dieResult}**.`)
					if (bonus > 0) {
						dieEmbed.addField(`Bonus Total`, `${dieResult} + ${bonus} = **${bonusTotal}**`)
					}
					return message.channel.send(dieEmbed);
				}
    }
};