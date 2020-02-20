
const Discord = require("discord.js");

const dice = [
	"https://i.imgur.com/ksZMbNc.png",
	"https://i.imgur.com/lZcxyQB.png",
	"https://i.imgur.com/YgJOBWm.png",
	"https://i.imgur.com/XKAEuQh.png",
	"https://i.imgur.com/yvKRm55.png",
	"https://i.imgur.com/HGzbNpv.png"
]

module.exports = {
    name: 'droll',
    description: 'Rolls you a set of values for a D&D Character!',
    aliases: ['roll'],
    usage: '//droll',
    cooldown: 0,
    execute(client, message, args) {

        const diceRoll = dice[Math.floor(Math.random() * dice.length)];

        const droll = new Discord.RichEmbed()
            .setColor(client.config.color)
            .setAuthor("Dice Roll")
            .setImage(diceRoll);

        return message.channel.send(droll);
    },
};