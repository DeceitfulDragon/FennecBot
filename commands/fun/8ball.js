const Discord = require("discord.js");
const { Command } = require('../../commando');

// Array for the 8Ball Answers
const eBall = [

    "*It is certain.*",
    "*It is decidedly so.*",
    "*Without a doubt.*",
    "*Yes - Definitely.*",
    "*You may rely on it.*",
    "*As we see it, yes.*",
    "*Most likely.*",
    "*Outlook good.*",
    "*Yes, Yes, Yes, and Yes.*",
    "*Signs point to yes.*",
    "*Your words were hazy, try again.*",
    "*Ask later, please.*",
    "*Fuck you and that shit.*",
    "*Cannot predict now.*",
    "*Ask again, faggot.*",
    "*Don't count on it.*",
    "*Our reply is no.*",
    "*Our sources say no.*",
    "*Outlook not so good.*",
    "*Very Doubtful.*",
    "*No.*",
    "*GRILLED CHEESE.*",
    "*GRILLED CHEESE.*",
    "*GRILLED CHEESE.*",
    "*GRILLED CHEESE.*",
    "*GRILLED CHEESE.*",
    "*GRILLED CHEESE.*"
]


module.exports = class BallCommand extends Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'fun',
            memberName: 'cry',
            guildOnly: true,
            description: 'Ask the gods',
            examples: ['//8ball Am I Gay?'],
            throttling: {
                usages: 1,
                duration: 5
            }
        });
    }





    run(client, message) {
        const bAnswer = eBall[Math.floor(Math.random() * eBall.length)];


        message.channel.send("**The Gods say:** " + bAnswer)
    }
}
