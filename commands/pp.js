const Discord = require("discord.js");
const min = 0;
const max = 15;

const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message, args) => {

	var ppResult = Math.floor(Math.random() * (max - min + 1)) + min;

	const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'sizes';").get();

	if (!table['count(*)']) {

		sql.prepare("CREATE TABLE sizes (id TEXT PRIMARY KEY, size INTEGER, name TEXT);").run();

		sql.prepare("CREATE UNIQUE INDEX idx_sizes_id ON sizes (id);").run();
		sql.pragma("synchronous = 1");
		sql.pragma("journal_mode = wal");
	}

	client.getScore = sql.prepare("SELECT * FROM sizes WHERE id = ?");
	client.setScore = sql.prepare("INSERT OR REPLACE INTO sizes (id, size, name) VALUES (@id, @size, @name);");


	score = client.getScore.get(message.author.id);
	if (!score) {
		score = { id: message.author.id, size: ppResult, name: message.author.username }
	}
	client.setScore.run(score);


	const ppEmbed = new Discord.RichEmbed()
		.setColor(client.config.color)
		.setAuthor(`Dick Size Calculator`)
		.setDescription(`${message.author.username}'s dick is ${score.size} inches long.`);

	return message.channel.send(ppEmbed);

};