const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message, args) => {

	const money = parseInt(args);

	var content = message.content;
	var parts = content.split(" ");
	var check = parts[1];

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
	Eco = client.getEco.get(message.author.id);

	if (!Eco) {

		return message.reply(`You don't have an Eco account setup! Do //money and then come back to this command.`);

	} else {

		if (!check) {

			return message.reply("SPECIFY THE MONEY LEBOWSKI!")

		} else {

			if (!isNaN(money) && money > 0) {

				if (Eco.cash >= money) {

					let mon = client.getEco.get(message.author.id);

					mon.cash = parseInt(mon.cash) - money;
					mon.bank = parseInt(mon.bank) + money;

					client.setEco.run(mon);

					return message.reply(`$${money} has been deposited into your bank.`)

				} else {

					return message.reply("You don't have that much money in your bank, sorry!")

				}
			} else {

				return message.reply(`Please specify a correct number.`);

			}
		}
	}
};