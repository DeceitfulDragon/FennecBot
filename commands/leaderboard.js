
const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message, args) => {

	const top10 = sql.prepare("SELECT * FROM pointchart WHERE id = ? ORDER BY points DESC LIMIT 10;").all(message.author.id);


};