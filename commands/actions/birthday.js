const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

module.exports = {
    name: 'birthday',
    description: 'Set your birthday in the profile',
    aliases: ['birth, bday'],
    usage: '//birthday <birthday> (make sure it is in the format of month-day)',
    cooldown: 1,
    execute(message, args) {

        var valu = args
        if (!valu) {
            const TZEmbed = new Discord.RichEmbed()
                .setTitle("Birthday")
                .setDescription(`Please put your birthday in the form of month - day. EX: 01-10 = January 10th.`)
                .setColor(client.config.economyColor);
            return message.channel.send(TZEmbed);

        } else {

            let data = `UPDATE profile
		SET birth = '${valu}'
		WHERE id = ${message.author.id};`


            sql.exec(data);

            return message.reply(`Success! Your Birthday has been set to ${valu}`)
        }
    },
};