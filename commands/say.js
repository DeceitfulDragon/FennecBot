const { Helpers } = require('../assets/json/config.json')

exports.run = (client, message, args) => {

    sMessage = args.join(" ")

	if (Helpers.includes(message.author.id) == true) {

        message.delete()
		return message.channel.send(sMessage);

    } else {

        return message.reply("You're not the boss of me! :rage:")
    }

};