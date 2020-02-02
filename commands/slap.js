const { slap } = require('../assets/json/actions.json')

exports.run = (client, message, args) => {

	var victim = message.mentions.users.first() || client.users.get(args[0]);
	var caller = message.author

	if (victim == caller) {

		message.channel.send("You shouldn't slap yourself...")

	} else if (!victim) {

		message.channel.send("Please mention a user to slap!")

	} else {

		var aSlap = slap[Math.floor(Math.random() * slap.length)];

		message.channel.send(`${message.author} just slapped ${victim}!\n${aSlap}`)
	}


};