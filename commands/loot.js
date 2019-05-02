const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const talkedRecently = new Set();

const min = 10;
const max = 50;
exports.run = (client, message, args) => {

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
	Eco = client.getEco.get(message.author.id);

	var money = Math.floor(Math.random() * (max - min + 1)) + min;




	if (!Eco) {

		return message.reply(`You don't have an Eco account setup! Do //money and then come back to this command.`);

	} else {

		if (!talkedRecently.has(message.author.id)) {

			Eco.cash += money;	// Put it into the cash

			client.setEco.run(Eco);

			talkedRecently.add(message.author.id);
			setTimeout(() => {
				talkedRecently.delete(message.author.id);
			}, 60000);

			return message.reply(`You found some loose change while digging through messages! +**$${money}** added to your wallet`);

		} else {

			return message.reply(`Sorry bucko, you need a take a break before doin' that again! (Timeout is 60 seconds total)`);

		}	
	}

};