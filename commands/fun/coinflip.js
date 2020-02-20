const max = 2
const min = 1

module.exports = {
    name: 'coinflip',
    description: 'Flip a coin',
    aliases: ['coin', 'coin'],
    usage: '//coinflip',
    cooldown: 0,
    execute(client, message, args) {

        var numResult = Math.floor(Math.random() * (max - min + 1)) + min;

        if (numResult == 2) {

            return message.channel.send("Heads!");

        } else {

            return message.channel.send("Tails!");

        }
    },
};