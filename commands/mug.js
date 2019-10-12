const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const mugCooldown = new Set();

const max = 10;
const min = 0;

exports.run = (client, message, args) => {

	const user = message.mentions.users.first() || client.users.get(args[0]); // Determine Target (First ping)

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");

	if (!mugCooldown.has(message.author.id)) {

		if (!user) {

			return message.reply(`Please specify who you want to mug.`);

		} else {

			var userscore = client.getEco.get(user.id);
			var Ecoguy = client.getEco.get(message.author.id);

			var chanceGen = Math.floor(Math.random() * (max - min + 1)) + min;

			if (!userscore || !Ecoguy) {

				return message.reply("One of you doesn't have any cash to rob from!");

			} else {
				if (userscore.cash > 10) {

					if (chanceGen < 3) {


						money = Math.round(userscore.cash * 0.3);

						userscore.cash -= money;
						Ecoguy.cash += money;

						client.setEco.run(userscore);
						client.setEco.run(Ecoguy);

						mugCooldown.add(message.author.id);
						setTimeout(() => {
							mugCooldown.delete(message.author.id);
						}, 1200000);

						return message.channel.send(`${user} was just mugged by ${message.author} for **$${money}**.`);

					} else {

						mugCooldown.add(message.author.id);
						setTimeout(() => {
							mugCooldown.delete(message.author.id);
						}, 1200000);

						return message.reply(`[You failed to mug ${user}].`);

					}
				} else {
					
					return message.reply(`lol they're too poor to rob.`);

				}
			}
		}

	} else {

		return message.reply("You're too busy trying to find another rusty spoon to mug people with! (Timeout is 20 mins total.)");

	}
};