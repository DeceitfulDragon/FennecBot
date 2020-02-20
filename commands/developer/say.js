
module.exports = {
    name: 'say',
    description: 'Control FennecBot\'s voice',
    aliases: ['speak'],
    usage: '//say <message>',
    cooldown: 2,
    execute(client, message, args) {

        sMessage = args.join(" ")

        if (client.config.helpers.includes(message.author.id) == true) {

            message.delete()
            return message.channel.send(sMessage);

        } else {

            return message.reply("You're not the boss of me! :rage:")
        }
    },
};