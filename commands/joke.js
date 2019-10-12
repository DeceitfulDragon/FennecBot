const request = require('request');
const Discord = require("discord.js");
var apiURL = "https://official-joke-api.appspot.com/random_joke";

exports.run = (client, message) => {


    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var joke = JSON.parse(body)

            const jokeEmbed = new Discord.RichEmbed()
                .setColor(client.config.triviaColor)
                .setTitle(joke.setup)
                .setDescription(joke.punchline)

            return message.channel.send(jokeEmbed);
        }
    })

};