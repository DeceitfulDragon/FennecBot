const { hug } = require('../json/actions.json')

exports.run = (client, message, args) => {
    var aHug = hug[Math.floor(Math.random() * hug.length)];

	var victim = message.mentions.users.first() || client.users.get(args[0]);
    var caller = message.author


	if (victim == caller) {

		message.channel.send("That's kinda sad!")

	} else if (!victim) {

		message.channel.send("Please mention a user to hug!")

	} else {

		var aHug = hug[Math.floor(Math.random() * hug.length)];

		return message.channel.send(`${message.author} just hugged ${victim}!\n${aHug}`);
    }
};