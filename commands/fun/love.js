const Discord = require("discord.js");
const { Score20, Score40, Score60, Score80, Score90 } = require('../../assets/json/lovecalc.json');
const max = 100
const min = 1

module.exports = {
    name: 'love',
    description: 'Find out how much two people love eachother.',
    aliases: ['calculate'],
    usage: '//love <name> <name>',
    cooldown: 1,
    execute(client, message, args) {

        var choices = args.split(', ');

        var percentage = Math.floor(Math.random() * (max - min + 1)) + min;

        if (percentage <= 20) {

            var statement = Score20[Math.floor(Math.random() * Score20.length)];
            var heartIco = 'https://i.imgur.com/reeZdtL.png';

        } else if (20 < percentage && percentage < 40) {

            var statement = Score40[Math.floor(Math.random() * Score40.length)];
            var heartIco = 'https://i.imgur.com/reeZdtL.png';


        } else if (40 <= percentage && percentage < 60) {

            var statement = Score60[Math.floor(Math.random() * Score60.length)];
            var heartIco = 'https://i.imgur.com/S60ESOS.png';


        } else if (60 <= percentage && percentage < 80) {

            var statement = Score80[Math.floor(Math.random() * Score80.length)];
            var heartIco = 'https://i.imgur.com/S60ESOS.png';

        } else if (percentage >= 80) {

            var statement = Score90[Math.floor(Math.random() * Score90.length)];
            var heartIco = 'https://i.imgur.com/VPiVdGG.png';
        }

        const loveEmbed = new Discord.RichEmbed()
            .setColor('#FF00BB')
            .setThumbnail(heartIco)
            .setAuthor(`Love Calculator [${choices[1]} & ${choices[2]}]`)
            .addField(`Calculation:`, `**${percentage}%**`)
            .addField("Statement:", statement);
        return message.channel.send(loveEmbed);

    },
};