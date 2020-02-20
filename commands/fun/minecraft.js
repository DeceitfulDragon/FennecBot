
module.exports = {
    name: 'minecraft',
    description: 'Get the minecraft playermodel of a user.',
    aliases: ['mc'],
    usage: '//minecraft <name>',
    cooldown: 1,
    execute(client, message, args) {

        username = args[0];

        if (!username) return message.reply(`Please give me a username!`);

        const apiURL = 'https://www.mc-heads.net/body/' + `${username}.png`

        return message.channel.send({ file: apiURL });

    },
};