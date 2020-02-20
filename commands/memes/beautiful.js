const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const Discord = require('discord.js');

module.exports = {
    name: 'beautiful',
    description: 'Make a Grunkle Stan meme with a user\'s avatar.',
    aliases: ['grunkle'],
    usage: '//beautiful <user>',
    cooldown: 1,
   async execute(client, message, args) {

        const user = message.mentions.users.first();
        var Avatar = user.displayAvatarURL({ format: 'png', size: 128 });
        //

        const image = await loadImage('assets/images/grunkle.png');
        const body = await request.get(Avatar);
        const avatar = await loadImage(body);
        const canvas = createCanvas(image.width, image.height);
        const context = canvas.getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 0, image.width, image.height);
        context.drawImage(avatar, 249, 24, 105, 105);
        context.drawImage(avatar, 249, 223, 105, 105);
        context.drawImage(image, 0, 0);

        console.log("should be working?")
        return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'thisisbeautiful.png' }] });
    },
};