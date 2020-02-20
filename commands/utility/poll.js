const prompter = require('discordjs-prompter');
const pollEmbed = require('discord.js-poll-embed');
const Discord = require("discord.js");

module.exports = {
    name: 'poll',
    description: 'Make a poll!',
    aliases: ['question'],
    usage: '//poll',
    cooldown: 2,
    execute(client, msg, args) {

        prompter
            .message(msg.channel, {
                question: 'Please enter the title of your poll:',
                userId: msg.author.id,
                max: 1,
                timeout: 10000,
            })
            .then(responses => {
                if (!responses.size) {
                    return msg.channel.send(`I can't start a poll without information! Poll creation ended.`);
                }
                const pTitle = responses.first();

                prompter
                    .message(msg.channel, {
                        question: 'Please type the options of your poll. Max options is 10. (Separate each option with a comma. EX: option one, option two, pancakes )',
                        userId: msg.author.id,
                        max: 1,
                        timeout: 10000,
                    })
                    .then(responses => {
                        if (!responses.size) {
                            return msg.channel.send(`I can't start a poll without information! Poll creation ended.`);
                        }

                        var baba = responses.first().toString()
                        var options = baba.toString()
                        var pOptions = options.split(', ');

                        prompter
                            .message(msg.channel, {
                                question: 'Almost done! How long do you want the poll to stay open? Answer is in ms.',
                                userId: msg.author.id,
                                max: 1,
                                timeout: 10000,
                            })
                            .then(responses => {
                                if (!responses.size) {
                                    return msg.channel.send(`I can't start a poll without information! Poll creation ended.`);
                                }

                                var pTimeout = responses.first()

                                return pollEmbed(msg, pTitle, pOptions, pTimeout);
                            })
                    })
            })
    },
};