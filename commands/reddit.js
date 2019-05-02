const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    var search = message.content.split(/\s+/g).slice(1).join(" ");
    randomPuppy(search)
        .then(url => {
            const redditEmbed = new Discord.RichEmbed()
                .setAuthor(`Subreddit: ${search}`)
                .setImage(url)
                .setColor(client.config.color)
                .setFooter("FennecBot Version: " + client.config.botversion);
            return message.channel.send(redditEmbed);
        }) .catch(err => {
            console.log(err)
            return message.channel.send(`Nothing found for **${search}**`);
        })
};