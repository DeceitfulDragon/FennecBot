
module.exports = {
    name: 'custom',
    description: 'customize your profile',
    usage: '//custom',
    cooldown: 2,
    execute(client, message, args, sql) {

        var profiles = [
            'vaporwave',
            'default',
            'candycorn'
        ]

        if (!args[0]) return message.reply(`test`);

        var request = args[0].toLowerCase();


        client.getCustom = sql.prepare("SELECT * FROM custom WHERE id = ?");
        client.setCustom = sql.prepare("INSERT OR REPLACE INTO custom (id, user, profile, text, background) VALUES (@id, @user, @profile, @text, @background);");
        Custom = client.getCustom.get(message.author.id);

        if (request == "profile") {

            if (!args[1]) {

                return message.channel.send(`The current list of profiles to choose from are **Default or Vaporwave**. Use //custom profile <choice>`)

            } else {

                var option = args[1].toLowerCase();

                if (!profiles.includes(option)) return message.reply(`Sorry, that's not one of the options, do //custom profile`)

                    var data = `UPDATE custom
		        SET profile = '${option}'
		        WHERE id = ${message.author.id};`

                sql.exec(data);

                return message.reply(`Success, you have changed your profile type to ${option}`);

            }

        }

    },
};