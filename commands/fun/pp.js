const Discord = require("discord.js");
const min = 0;
const max = 15;

module.exports = {
    name: 'pp',
    description: 'Calculate how big your dick is with this new tool!',
    aliases: ['penis'],
    usage: '//pp',
    cooldown: 1,
    execute(client, message, args, sql) {

        var ppResult = Math.floor(Math.random() * (max - min + 1)) + min;

        client.getScore = sql.prepare("SELECT * FROM sizes WHERE id = ?");
        client.setScore = sql.prepare("INSERT OR REPLACE INTO sizes (id, size, tiddy, name) VALUES (@id, @size, @tiddy, @name);");


        score = client.getScore.get(message.author.id);
        if (!score) {
            score = { id: message.author.id, size: ppResult, tiddy: "//tiddy", name: message.author.username }
        }
        client.setScore.run(score);


        const ppEmbed = new Discord.RichEmbed()
            .setColor(client.config.color)
            .setAuthor(`Dick Size Calculator`)
            .setDescription(`${message.author.username}'s dick is ${score.size} inches long.`);

        return message.channel.send(ppEmbed);
    },
};