
const max = 10
const min = 1
exports.run = (client, message, args) => {

	var rateV = Math.floor(Math.random() * (max - min + 1)) + min;

		return message.channel.send(`I rate that a(n) **${rateV}**.`);

};