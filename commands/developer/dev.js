
module.exports = {
    name: 'dev',
    description: '...',
    aliases: ['developer'],
    usage: '//dev',
    cooldown: 1,
    execute(client, message, args) {


        if (client.config.helpers.includes(message.author.id) == true) {

            if (args == 'guild') {



            } else if (args == 'stats') {



            }

        } else {

            return message.channel.send("Error: You are not a developer or helper.");

        }
    },
};