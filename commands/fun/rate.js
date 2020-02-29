const max = 10
const min = 1
module.exports = {
    name: 'rate',
    description: 'Rate something!',
    aliases: ['r8'],
    usage: '//rate <something>',
    cooldown: 1,
    execute(client, message, args) {

        var rateV = Math.floor(Math.random() * (max - min + 1)) + min;

        return message.channel.send(`I rate that a(n) **${rateV}**.`);
    },
};