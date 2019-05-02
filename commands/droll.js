// Requires discord.js to use the RichEmbed
const Discord = require("discord.js");
// Array for the imgur die images
const dice = [
	"https://i.imgur.com/ksZMbNc.png",
	"https://i.imgur.com/lZcxyQB.png",
	"https://i.imgur.com/YgJOBWm.png",
	"https://i.imgur.com/XKAEuQh.png",
	"https://i.imgur.com/yvKRm55.png",
	"https://i.imgur.com/HGzbNpv.png"
]

exports.run = (client, message) => {
    // Select a random image to output
const diceRoll = dice[Math.floor(Math.random() * dice.length)];
    // RichEmbed for the image
    const droll = new Discord.RichEmbed()
        .setColor(client.config.color)
        .setAuthor("Dice Roll")
        .setImage(diceRoll)
    // Sends the RichEmbed
    message.channel.send(droll)
};