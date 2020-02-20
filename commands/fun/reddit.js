const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'reddit',
    description: 'Grab a random image from a subreddit.',
    aliases: ['r'],
    usage: '//reddit <subreddit>',
    cooldown: 2,
    execute(client, message, args) {

        return message.reply(`no more nuke`);
        var search = message.content.split(/\s+/g).slice(1).join(" ");
        randomPuppy(search)
            .then(url => {
                const redditEmbed = new Discord.RichEmbed()
                    .setAuthor(`Subreddit: ${search}`)
                    .setImage(url)
                    .setColor(client.config.color);

                return message.channel.send(redditEmbed);

            }).catch(err => {

                console.log(err)
                return message.channel.send(`Nothing found for **${search}**`);

            })
    },
};