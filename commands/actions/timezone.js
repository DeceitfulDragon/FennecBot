const { TZ } = require('../../assets/json/AmericanTimeZones.json')

module.exports = {
    name: 'timezone',
    description: 'Set your timezone on the profile.',
    aliases: ['tz', 'zone'],
    usage: '//timezone <timezone>',
    cooldown: 2,
    execute(client, message, args, sql) {

        var zone = args[0];
        var uZone = zone.toUpperCase();


        if (TZ.includes(uZone) == true) {

            var data = `UPDATE profile
		SET zone = '${zone}'
		WHERE id = ${message.author.id};`

            sql.exec(data);

            return message.reply(`Success! Your time-zone has been set to ${zone}`);

        } else {

            return message.reply(`Please choose a proper Timezone.`);

        }
    },
};