
const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message) => {

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
	Eco = client.getEco.get(message.author.id);


	if (!Eco) {
		Eco = { id: message.author.id, cash: 200, bank: 100, user: message.author.username }
	}
	client.setEco.run(Eco);

	const ecoEmbed = new Discord.RichEmbed()
		.setColor(client.config.economyColor)
		.setAuthor(`${message.author.username}'s Balance.`)
		.addField("Cash", `$${Eco.cash}`, true)
		.addField("Bank", `$${Eco.bank}`, true)
		.setFooter("FennecBot Version: " + client.config.botversion);
	return message.channel.send(ecoEmbed);

};