module.exports = {
    name: 'choose',
    description: 'Choose between two things.',
    aliases: ['choice'],
    usage: '//choose <option 1> <option 2>',
    cooldown: 1,
    execute(client, message, args) {

        var choices = [args[0], args[1]];

        var chosen = choices[Math.floor(Math.random() * choices.length)];

        return message.reply(`I choose: **${chosen}**`);
    },
};