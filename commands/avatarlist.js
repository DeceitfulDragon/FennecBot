exports.run = (client, message) => {
    const avList = message.mentions.users.map(user => {
        return `:pushpin: ${user.username}'s avatar: <${user.displayAvatarURL}>`;
    });

    message.channel.send(avList);
};