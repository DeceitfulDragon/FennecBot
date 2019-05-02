const { TZ } = require('../json/AmericanTimeZones.json')
const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');


exports.run = async (client, message, args) => {

	var content = message.content;
	var parts = content.split(" ");
	var zone = parts[1];

	var zOne = args;

	if (TZ.includes(zone) == true) {

		var data = `UPDATE profile
		SET zone = '${zone}'
		WHERE id = ${message.author.id};`

		sql.exec(data);

		return message.reply(`Success! Your time-zone has been set to ${zone}`);

	} else {

		return message.reply(`Please choose a proper Timezone.`);

	}
};