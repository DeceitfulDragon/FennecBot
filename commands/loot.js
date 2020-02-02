const { loot } = require("../assets/json/eco.json")
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const lootTimer = new Set();

const min = 10;
const max = 50;
exports.run = (client, message) => {

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
	Eco = client.getEco.get(message.author.id);

	var money = Math.floor(Math.random() * (max - min + 1)) + min;
	var gLoot = loot[Math.floor(Math.random() * loot.length)];

	if (!Eco) {

		return message.reply(`You don't have an bank account setup! Do //account and then come back to this command.`);

	} else {

		if (!lootTimer.has(message.author.id)) {

			Eco.cash += money;	// Put it into the cash

			client.setEco.run(Eco);

			lootTimer.add(message.author.id);
			setTimeout(() => {
				lootTimer.delete(message.author.id);
			}, 60000);

			return message.reply(`${gLoot} +**$${money}** added to your wallet.`);

		} else {

			return message.reply(`Oh noes! All the loot is gone! Come back later when it respawns. (Timeout is 60 seconds total)`);

		}	
	}

};