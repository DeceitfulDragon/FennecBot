

/*exports.run = (client, message) => {

	var chosen = message.guild.members.random()

	return message.channel.send(`${message.author} just spun the bottle! It landed on ${chosen}`);

};*/


module.exports = {
    name: 'bottle',
    description: 'Spin a bottle and see which user it lands on!',
    usage: '//bottle',
    aliases: ['spin'],
    cooldown: 2,
    execute(message) {

        var chosen = message.guild.members.random()

        return message.channel.send(`${message.author} just spun the bottle! It landed on ${chosen}`);

    },
};