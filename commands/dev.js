const { Helpers } = require('../assets/json/config.json')

exports.run = (client, message, args) => {


	if (Helpers.includes(message.author.id) == true) {

		if (args == 'guild') {



		} else if (args == 'stats') {



		}

	} else {

		return message.channel.send("Error: You are not a developer or helper.");

    }
};