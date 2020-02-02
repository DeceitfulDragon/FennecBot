const { pat } = require('../assets/json/actions.json')

exports.run = (client, message, args) => {

  
	var victim = message.mentions.users.first() || client.users.get(args[0]);
    var caller = message.author

	if (victim == caller) {

		message.channel.send("You can't pat yourself.")

	} else if (!victim) {

		message.channel.send("Please mention a user to pat!")

	} else {

        var aPat = pat[Math.floor(Math.random() * pat.length)];

		message.channel.send(`${message.author} just patted ${victim}!\n${aPat}`)
    }
};