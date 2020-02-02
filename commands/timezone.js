const { TZ } = require('../assets/json/AmericanTimeZones.json')
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');


exports.run = async (client, message, args) => {

	var zone = args[0];
    var uZone = zone.toUpperCase();


	if (TZ.includes(uZone) == true) {

		var data = `UPDATE profile
		SET zone = '${zone}'
		WHERE id = ${message.author.id};`

		sql.exec(data);

		return message.reply(`Success! Your time-zone has been set to ${zone}`);

	} else {

		return message.reply(`Please choose a proper Timezone.`);

	}
	

};