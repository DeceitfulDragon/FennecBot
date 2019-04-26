const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const talkedRecently = new Set();

exports.run = (client, message, args) => {


	if (talkedRecently.has(message.author.id)) {

		return message.reply("You are currently on Rep Cooldown!");

	} else {

		const user = message.mentions.users.first() || client.users.get(args[0]);

		if (!user) {

			return message.reply("You must mention someone or give their ID!");

		} else if (user == message.author || user == message.author.id) {

			return message.reply("You can't give yourself Rep-Points.");

		} else if (user.id === '532770681096503299') {

			message.reply("I don't need your charity, fuck outta hee");

		} else {

			const repPoint = 1;

			client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
			let userscore = client.getProfile.get(user.id);

			userscore.rep += repPoint;

			client.setProfile = sql.prepare("INSERT OR REPLACE INTO profile (id, user, zone, birth, gender, rep, marry, marryid) VALUES (@id, @user, @zone, @birth, @gender, @rep, @marry, @marryid);");

			client.setProfile.run(userscore);

			if (userscore.rep === '1') {

				return message.channel.send(`${user} has received a point toward their reputation, and now stands at a rep of **${userscore.rep}** point.`);

				talkedRecently.add(message.author.id);
				setTimeout(() => {
					talkedRecently.delete(message.author.id);
				}, 2700000);

			} else {

				return message.channel.send(`${user} has received a point toward their reputation, and now stands at a rep of **${userscore.rep}** points.`);

				talkedRecently.add(message.author.id);
				setTimeout(() => {
					talkedRecently.delete(message.author.id);
				}, 2700000);

			}
		}
	}

};