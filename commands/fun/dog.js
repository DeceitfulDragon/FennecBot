const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'dog',
    description: 'Get a picture of a dog!',
    aliases: ['puppy'],
    usage: '//dog',
    cooldown: 2,
    execute(client, message, args) {

        randomPuppy()
            .then(url => {
                const dogEmbed = new Discord.RichEmbed()
                    .setAuthor("Random Dog")
                    .setImage(url)
                    .setColor(client.config.color);
                return message.channel.send(dogEmbed);
            })
    },
};