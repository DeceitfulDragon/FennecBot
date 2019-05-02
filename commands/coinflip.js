const max = 2
const min = 1

exports.run = (client, message) => {

    var numResult = Math.floor(Math.random() * (max - min + 1)) + min;

	if (numResult == 2) {

		return message.channel.send("Heads!");

	} else {

		return message.channel.send("Tails!");

    }
};