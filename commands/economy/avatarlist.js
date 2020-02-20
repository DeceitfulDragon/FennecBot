module.exports = {
    name: 'avatarlist',
    description: 'List all commands or get info on a specific one.',
    aliases: ['avl, icons'],
    usage: '//avatarlist <user> [user] etc',
    cooldown: 1,
    execute(message, args) {

        const avList = message.mentions.users.map(user => {
            return `:pushpin: ${user.username}'s avatar: <${user.displayAvatarURL}>`;
        });

        return message.channel.send(avList);
    },
};