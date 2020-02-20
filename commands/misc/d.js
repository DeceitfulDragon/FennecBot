const Discord = require("discord.js");
const min = 1;
module.exports = {
    name: 'd',
    description: 'Roll some dice!',
    aliases: ['dice, die'],
    usage: '//d <sides> <rolls> [bonus]',
    cooldown: 0,
    execute(client, message, args) {

        const max = parseInt(args[0]);
        const rolls = parseInt(args[1]);
        var bonus = parseInt(args[2]);

        if (!max) return message.reply(`You didn't give me enough information! How many sides does your dice have?`)
        if (rolls > 30) return message.reply(`That's too many rolls for me to count, try a lower number please!`);
        if (max < 2) return message.reply("Please pick a number greater than 1.");
        if (!rolls) { var rolls = 1 }

        var dRoll = [];
        var text = [];
        var total = 0;

        for (var i = 1; i <= rolls; ++i) {

            dRoll[i] = Math.floor(Math.random() * (max - min + 1)) + min;

            text[i] = `🎲 rolled a(n) **${dRoll[i]}**`;

            total += dRoll[i];

        }

        var dice = text.join('\n');

        const bonusTotal = bonus + total;

        const diceEmbed = new Discord.RichEmbed()
            .setColor(client.config.color)
            .setAuthor(`${max}-Sides, rolled ${rolls} time(s)`)

        if (!bonus) {
            diceEmbed.setDescription(`${dice}\n\n **Total**: ${total}`);
        } else {
            diceEmbed.setDescription(`${dice}\n\n **Bonus Total**: ${total} + ${bonus} = **${bonusTotal}**`);
        }

        return message.channel.send(diceEmbed);
    },
};