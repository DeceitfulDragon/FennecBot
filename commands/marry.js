const { marry } = require('../json/actions.json');

const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message, args) => {

	var aMarry = marry[Math.floor(Math.random() * marry.length)];

	var victim = message.mentions.users.first() || client.users.get(args[0]);

	if (victim == message.author) {

		return message.reply("You can't propose to yourself.");

	} else if (!victim) {

		return message.reply("Please mention a user to propose to!");

	} else if (victim == client) {

		return message.reply("Thanks, but I'm not on the market.")

	} else {

		var marryMessage = `${ message.author } is proposing to ${ victim }\nThey have 60 seconds to reply with 'accept' to accept the proposal, or just wait for the 60 seconds to pass (***5+ MESSAGES FROM USER BEING MARRIED WILL CANCEL THE PROPOSAL.***)				${ aMarry }`

		message.channel.send(marryMessage).then(() => {


			// Await !vote messages
			//const filter = m => m.content.startsWith('!vote');
			const filter = m => `accept`;
			// Errors: ['time'] treats ending because of the time limit as an error
			message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
				.then(collected => message.channel.send(`success`))
				.catch(collected => message.channel.send(`fail`));
		});
	}
	
};