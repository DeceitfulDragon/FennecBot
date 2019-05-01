const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
exports.run = (client, message) => {

		client.getDick = sql.prepare("SELECT * FROM sizes WHERE id = ?");
	Dick = client.getDick.get(message.author.id);

	client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
	client.setProfile = sql.prepare("INSERT OR REPLACE INTO profile (id, user, zone, birth, gender, rep, marry, marryid) VALUES (@id, @user, @zone, @birth, @gender, @rep, @marry, @marryid);");
	Profile = client.getProfile.get(message.author.id);

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	Eco = client.getEco.get(message.author.id);
	
	if (!Profile) {
		Profile = {
			id: message.author.id, user: message.author.username, zone: "not set", birth: "not set", gender: "not set", rep: 0, marry: "Nobody", marryid: "NULL"
		}
	}
	client.setProfile.run(Profile);


	if (!Eco) {

		return message.reply("Error 404 - Money not found. Please do //money to open an economy account within FennecBot, then come back to this command!")

	} else {



		const profileEmbed = new Discord.RichEmbed()
			.setColor(client.config.economyColor)
			.setTitle(`:globe_with_meridians: ${message.author.username}'s Profile.`)
			.setThumbnail(message.author.avatarURL)
			.addField(`:dollar: Money`, `Cash: $${Eco.cash}\nBank: $${Eco.bank}`, true)
			.addField(`:alarm_clock:  TimeZone:`, `${Profile.zone}`, true)
			.addField(`:spy: Gender:`, `${Profile.gender}`, true)
			.addField(`:medal:  Reputation:`, `-- ${Profile.rep} --`, true)
			.addField(`:eggplant:  Dick Size:`, `${Dick.size} inches`, true)
			.addField(`:gift: Birthday:`, `${Profile.birth}`, true)
			.addField(`:sparkling_heart: Married to:`, `${Profile.marry}`, true)
			.addField(`:handbag: Items:`, `NULL`, true)
			.setFooter("FennecBot Version: " + client.config.botversion);


		return message.channel.send(profileEmbed);

	}
};