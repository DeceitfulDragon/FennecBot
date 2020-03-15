const min = 1
module.exports = {
    name: 'number',
    description: 'Get a random number from 1 to your max.',
    usage: '//number <max>',
    cooldown: 0,
    execute(client, message, args) {

        var max = args[0]
	
	if (!max) return message.reply(`Please specify a max number!`);
	
        if (max < 2) {
            message.channel.send("Please pick a number greater than 1.")
        } else {
            var numResult = Math.floor(Math.random() * (max - min + 1)) + min;
            return message.channel.send(numResult);
        }
    },
};