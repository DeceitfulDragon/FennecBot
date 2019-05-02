const { work } = require("../json/eco.json")
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const talkedRecently = new Set();

const min = 100;
const max = 130;
exports.run = (client, message, args) => {

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
	Eco = client.getEco.get(message.author.id);

	var money = Math.floor(Math.random() * (max - min + 1)) + min;
	var aWork = work[Math.floor(Math.random() * work.length)];

	if (!Eco) {

		return message.reply(`You don't have an Eco account setup! Do //money and then come back to this command.`);

	} else {

		if (!talkedRecently.has(message.author.id)) {

			Eco.cash += money;

			client.setEco.run(Eco);

			talkedRecently.add(message.author.id);
			setTimeout(() => {
				talkedRecently.delete(message.author.id);
			}, 600000);

			return message.reply(`${aWork} +**$${money}** added to your wallet`);

		} else {

			return message.reply(`Sorry bucko, you need a take a break before doin' that again! (Timeout is 10 minutes total)`);

		}

	}


};