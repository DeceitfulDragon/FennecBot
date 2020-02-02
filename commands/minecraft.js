const request = require('request');
const { MessageAttachment } = require('discord.js');
exports.run = (client, message, args) => {

    username = args[0];
    if (!username) return message.reply(`Please give me a username!`);

    const apiURL = 'https://www.mc-heads.net/body/' + `${username}.png`
    //const image = new MessageAttachment(apiURL);

    return message.channel.send({ file: apiURL });

   /* request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body)
            var image = result.file

            return message.channel.send(image);

        }
    })*/

};