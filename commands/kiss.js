

const { kiss } = require('../json/actions.json')


exports.run = (client, message, args) => {

	var victim = message.mentions.users.first() || client.users.get(args[0]);
    var caller = message.author

    if (victim == caller) {
        message.channel.send("You can't kiss yourself.")
    } else if (!victim) {
        message.channel.send("Please mention a user to kiss!")
    } else {
        var aKiss = kiss[Math.floor(Math.random() * kiss.length)];

        message.channel.send(`${message.author} just kissed ` + victim + "                                                                                         " + aKiss)
    }
};