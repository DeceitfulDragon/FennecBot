const Discord = require("discord.js");
const prompter = require('discordjs-prompter');
const logo = 'https://i.imgur.com/QVk0pB9.png';
const { start } = require('../assets/deathmatch/deathmatch.json');

exports.run = (client, message, args) => {

    var users = message.mentions.users.array();
    const ft = users.toString();
    const startPlayers = ft.split(',');
    const gamePlayers = startPlayers.splice();

    const firstEmbed = new Discord.RichEmbed()      // First Embed (Displays Title Card)
        .setColor('018fe5')
        .setTitle(`Discord Deathmatch`)
        .setImage(logo)
        .setDescription(`Featuring: ${ft}`)
        .setFooter(`React with the check box below to start the game!`);

    message.channel.send(firstEmbed).then(firstEmbed => {  
        
    firstEmbed.react('✅').then(() => firstEmbed.react('🛑'));

    const filter = (reaction, user) => {
        return ['✅', '🛑'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    firstEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '✅') {


                var randPlayerA = startPlayers[Math.floor(Math.random() * startPlayers.length)];  
                let removeIndexA = startPlayers.indexOf(randPlayerA);
                let RemoveItemA = startPlayers.splice(removeIndexA, 1);

                var randPlayerB = startPlayers[Math.floor(Math.random() * startPlayers.length)];
                let removeIndexB = startPlayers.indexOf(randPlayerB);
                let RemoveItemB = startPlayers.splice(removeIndexB, 1);

                var randPlayerC = startPlayers[Math.floor(Math.random() * startPlayers.length)];
                let removeIndexC = startPlayers.indexOf(randPlayerC);
                let RemoveItemC = startPlayers.splice(removeIndexC, 1);


                var selectedStart = start[Math.floor(Math.random() * start.length)];  

                const startingEmbed = new Discord.RichEmbed()   // Starting Embed (No deaths, just getting loot)
                    .setColor('018fe5')
                    .setTitle(`Discord Deathmatch`)
                    .setDescription(`THE GAME HAS BEGUN\n${randPlayerA} ${selectedStart}\n${randPlayerB} ${selectedStart}\n${randPlayerC} ${selectedStart}`)
                    .setFooter(`React with the check box below to continue the game!`);

                return message.channel.send(startingEmbed)



            } else message.reply(`Game Ended by ${message.author.id}`);
        })
    });
};