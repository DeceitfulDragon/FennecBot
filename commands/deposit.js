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

			return message.reply("I can't deposit nothing! Please specify the amount!")

		} else {

			if (!isNaN(money) && money > 0) {

				if (Eco.cash >= money) {

					let mon = client.getEco.get(message.author.id);

					mon.bank = parseInt(mon.bank) + money; // Needs to be on top to deposit first, then take out cash.

					mon.cash = parseInt(mon.cash) - money; 

					client.setEco.run(mon);

					return message.reply(`$${money} has been deposited into your bank. Now it can't be stolen!`)

				} else {

					return message.reply("HAH YOU'RE TOO POOR FOR THAT!")

				}
			} else {

				return message.reply(`Please specify a correct number.`);

			}
		}
	}
};