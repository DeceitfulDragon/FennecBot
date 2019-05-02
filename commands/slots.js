const Discord = require("discord.js"); 
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message, args) => {


	var content = message.content
	var parts = content.split(" ");
	var check = parts[1]

	var money = args;

	//const slots = ['🎱', '🎲', '🍇', '💛', '🏆'];
	//const slots = ['<:slots_cherry:559910964938539018>', '<:slots_bar:559910937314983966>', '🍇', '❤', '<:slots_bigwin:559910953093693441>'];
	const slots = ['<:slots_cherry:559910964938539018>', '🎱', '🍇', '❤'];

	var slots1 = slots[Math.floor(Math.random() * slots.length)];
	var slots2 = slots[Math.floor(Math.random() * slots.length)];
	var slots3 = slots[Math.floor(Math.random() * slots.length)];

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
	Eco = client.getEco.get(message.author.id);

	if (!check) {

		return message.reply("WHERE'S THE MONEY LEBOWSKI!?");

	} else {

		if (!isNaN(money) && money > 0) {

			if (Eco.cash >= money) {

				if (slots1 == slots2 && slots2 == slots3) {

					if (money >= 100) {
						var moneyWon = money * 2;

						let userscore = client.getEco.get(message.author.id);

						userscore.cash += moneyWon;

						client.setEco.run(userscore);


						const goodslotEmbed = new Discord.RichEmbed()
							.setColor('#04FF00')
							.setAuthor("Slot Machine")
							.setDescription(`${slots1} **|** ${slots2} **|** ${slots3}`)
							.setFooter(`Congrats, you won $${moneyWon}`);

						return message.channel.send(goodslotEmbed);

					} else {

						var moneyWon = money * 3;

						let userscore = client.getEco.get(message.author.id);

						userscore.cash += moneyWon;

						client.setEco.run(userscore);



						const goodslotEmbed = new Discord.RichEmbed()
							.setColor('#04FF00')
							.setAuthor("Slot Machine")
							.setDescription(`${slots1} **|** ${slots2} **|** ${slots3}`)
							.setFooter(`Congrats, you won $${moneyWon}`);

						return message.channel.send(goodslotEmbed);
					}

				} else {

					let userscore = client.getEco.get(message.author.id);

					userscore.cash -= money;

					client.setEco.run(userscore);

					const badslotEmbed = new Discord.RichEmbed()
						.setColor('#FF0000')
						.setAuthor("Slot Machine")
						.setDescription(`${slots1} **|** ${slots2} **|** ${slots3}`)
						.setFooter(`Sorry, you lost $${money}`);

					return message.channel.send(badslotEmbed);

				}
			} else {

				return message.reply("Sorry, you don't have enough cash for that.");

			}

		} else {

			return message.reply("Please specify a correct number or a number greater than 0.");

		}
	}
};