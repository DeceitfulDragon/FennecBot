const { kiss } = require('../../assets/json/actions.json')

module.exports = {
    name: 'kiss',
    description: 'Kiss someone!',
    aliases: ['smooch'],
    usage: '//kiss <user>',
    cooldown: 1,
    execute(client, message, args) {

        var victim = message.mentions.users.first() || client.users.get(args[0]);
        var caller = message.author

        if (victim == caller) {

            message.channel.send("You can't kiss yourself.")

        } else if (!victim) {

            message.channel.send("Please mention a user to kiss!")

        } else {

            var aKiss = kiss[Math.floor(Math.random() * kiss.length)];

            return message.channel.send(`${message.author} just kissed ${victim}!\n${aKiss}`);
        }
    },
};