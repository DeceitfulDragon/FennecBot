
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');


exports.run = (client, message, args) => {

	var gender = args;

	if (gender == 'Male' || gender == 'Female') {

		var gender = args;

		var data = `UPDATE profile
		SET gender = '${gender}'
		WHERE id = ${message.author.id};`

		sql.exec(data);

		return message.reply(`Success! Your gender has been set to ${gender}`);

	} else {

		return message.reply(`Please select a correct gender (Female/Male).`);

	}
};