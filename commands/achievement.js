const { createCanvas, loadImage, registerFont } = require('canvas');
registerFont('assets/fonts/Minecraftia.ttf', { family: 'Minecraftia' });
const { shortenText } = require('../assets/canvas');

exports.run = async(client, message, args) => {

    text = args.join(" ");

const image = await loadImage('assets/images/achievement.png');
const canvas = createCanvas(image.width, image.height);
const context = canvas.getContext('2d');
context.drawImage(image, 0, 0);
context.font = '17px Minecraftia';
context.fillStyle = '#ffff00';
context.fillText('Achievement Get!', 60, 40);
context.fillStyle = '#ffffff';
context.fillText(shortenText(context, text, 230), 60, 60);
    return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'achievement.png' }] });

};