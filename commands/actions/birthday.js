const Discord = require("discord.js");

const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]

module.exports = {
    name: 'birthday',
    description: 'Set your birthday in the profile',
    aliases: ['birth, bday'],
    usage: '//birthday <month> <day>',
    cooldown: 1,
    execute(client, message, args, sql) {

        client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
        client.setProfile = sql.prepare("INSERT OR REPLACE INTO profile (id, user, zone, birth, gender, marry, bio) VALUES (@id, @user, @zone, @birth, @gender, @marry, @bio);");
        Profile = client.getProfile.get(message.author.id);

        if (!Profile) {
            Profile = {
                id: message.author.id, user: message.author.username, zone: "not set", birth: "not set", gender: "not set", marry: "Nobody", bio: "//bio"
            }
        }

        client.setProfile.run(Profile);


        if (!args[0]) return message.reply('HEY GIVE ME SOME ARGS. (``//birthday <month> <day>``)');

        var month = args[0].toLowerCase();

        var day = parseInt(args[1]);

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        if (!month || !day) return message.reply(`Please put your birthday in the form of month to day with a space between. EX: //birthday January 10`);

        if (!months.includes(month)) return message.reply(`I couldn't find that month!`);

        if (day > 31) return message.reply(`Hm, that day doesn't seem to check out...`);

        var month = capitalize(month);

        var month = month.substring(0, 3) + ".";

            let data = `UPDATE profile
		SET birth = '${month} ${day}'
		WHERE id = ${message.author.id};`

            sql.exec(data);


            return message.reply(`Success! Your Birthday has been set to ${month} ${day}.`);

    },
};