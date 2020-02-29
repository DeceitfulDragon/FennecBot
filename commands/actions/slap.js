const { slap } = require('../../assets/json/actions.json')

module.exports = {
    name: 'slap',
    description: 'Slap someone',
    aliases: ['hit'],
    usage: '//slap <user>',
    cooldown: 1,
    execute(client, message, args) {

        var victim = message.mentions.users.first() || client.users.get(args[0]);
        var caller = message.author

        if (victim == caller) {

            return message.channel.send("You shouldn't slap yourself...")

        } else if (victim.id == "532770681096503299") {

            return message.channel.send("Why would you slap me? :cry:")

        } else if (!victim) {

        } else {

            var aSlap = slap[Math.floor(Math.random() * slap.length)];

           return message.channel.send(`${message.author} just slapped ${victim}!\n${aSlap}`)
        }

    },
};