const { createCanvas, loadImage } = require('canvas');
const fetch = require("node-fetch");
const imageUrlRegex = /\?size=2048$/g;

module.exports = {
    name: 'beautiful',
    description: 'Make a Grunkle Stan meme with a user\'s avatar.',
    aliases: ['grunkle'],
    usage: '//beautiful <user>',
    cooldown: 1,
   async execute(client, message, args) {

       const user = message.mentions.users.first();

       if (!user) return message.reply(`Ping someone for the image!`);

       message.channel.startTyping();

       // var Avatar = user.displayAvatarURL({ format: 'png', size: 128 });
        //
       const result = await fetch(user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
       if (!result.ok) console.log("Failed to get the avatar.");
       var avatar = await result.buffer();

        const image = await loadImage('assets/images/grunkle2.png');
        //const body = await request.get(Avatar);
        var avatar = await loadImage(avatar);
        const canvas = createCanvas(image.width, image.height);
        const context = canvas.getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 0, image.width, image.height);
        context.drawImage(avatar, 249, 24, 105, 105);
        context.drawImage(avatar, 249, 223, 105, 105);
        context.drawImage(image, 0, 0);

       message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'thisisbeautiful.png' }] });

       return message.channel.stopTyping();
    },
};