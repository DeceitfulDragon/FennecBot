

exports.run = (client, message) => {

	var chosen = message.guild.members.random()

	return message.channel.send(`${message.author} just spun the bottle! It landed on ${chosen}`);

};