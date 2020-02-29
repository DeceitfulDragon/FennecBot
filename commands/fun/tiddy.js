const Discord = require("discord.js");

module.exports = {
    name: 'tiddy',
    description: 'Calculate how big your tits are with this new tool!',
    aliases: ['tits'],
    usage: '//tiddy',
    cooldown: 1,
    execute(client, message, args, sql) {

        client.getScore = sql.prepare("SELECT * FROM sizes WHERE id = ?");
        client.setScore = sql.prepare("INSERT OR REPLACE INTO sizes (id, size, tiddy, name) VALUES (@id, @size, @tiddy, @name);");

        var sizes = [
            'A',
            'B',
            'B',
            'B',
            'C',
            'C',
            'D'
        ]

        if (client.config.helpers.includes(message.author.id) == true) {
            var sizes = [
                'A',
                'B',
                'C',
                'D',
                'DD',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J'
            ]
        }

        var tResult = sizes[Math.floor(Math.random() * sizes.length)];

        score = client.getScore.get(message.author.id);

        if (!score) {
            score = { id: message.author.id, size: "//pp", tiddy: tResult, name: message.author.username }
        }

        client.setScore.run(score);

        var tits = score.tiddy;
        var tits = String(tits);

        if (tits == "not set" || tits == "//tiddy") {

            var data = `UPDATE sizes
		    SET tiddy = '${tResult}-Cup'
		    WHERE id = ${message.author.id};`

            sql.exec(data);

            const ttEmbed = new Discord.RichEmbed()
                .setColor(client.config.color)
                .setAuthor(`Breast Size Calculator`)
                .setDescription(`${message.author.username}'s tits are ${tResult}-Cups.`);

            return message.channel.send(ttEmbed);

        } else {

            const ttEmbed = new Discord.RichEmbed()
                .setColor(client.config.color)
                .setAuthor(`Breast Size Calculator`)
                .setDescription(`${message.author.username}'s tits are ${tits}s.`);

            return message.channel.send(ttEmbed);
        }
    },
};