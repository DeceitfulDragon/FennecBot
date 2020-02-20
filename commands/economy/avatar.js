module.exports = {
    name: 'avatar',
    description: 'Display your avatar.',
    aliases: ['icon, pfp'],
    usage: '//avatar',
    execute(message, args) {
       return message.reply(message.author.avatarURL);
    },
};