const Discord = require("discord.js");
//const logo = 'https://i.imgur.com/QVk0pB9.png';
//const { start } = require('../assets/deathmatch/default.js');
const { stripIndents } = require('common-tags');

module.exports = {
    name: 'deathmatch',
    description: 'DISCORD DEATHMATCH!!!',
    aliases: ['dmatch, death, match'],
    usage: '//deathmatch <12 user mentions>',
    cooldown: 20,
    execute(client, message, args) {

        function arrayRemove(arr, value) {

            return arr.filter(function (ele) {
                return ele != value;
            });
        }

        var users = message.mentions.users.array();
        const ft = users.toString();
        var startPlayers = ft.split(',');
        var gamePlayers = ft.split(',');

        var attachment = new Discord.Attachment('assets/deathmatch/logo.png', 'logo.png');
        const firstEmbed = new Discord.RichEmbed()      // First Embed (Displays Title Card)
            .setColor('018fe5')
            .setTitle(`Discord Deathmatch`)
            .attachFile(attachment)
            .setImage('attachment://logo.png')
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


                        const start = [
                            `grabbed a backpack from The Heap, not realizing it was empty.`,
                            `ran away from The Heap and headed toward the forest to hide.`,
                            `got off the starting platform before the siren and blew up. **[DEATH]**`,
                            `contemplated about charging The Heap but gave up and ran.`,
                            `headed toward The Heap and grabbed camping supplies.`,
                            `was intimidated by another contestant and decided not to go to The Heap.`,
                            `figured they were fine on their own and wandered to the town ruins.`,
                            `was intimidated by another contestant and decided not to go to The Heap.`,
                            `chased down another contestant into the town ruins.`,
                            `raced to a weapon at The Heap but was too slow.`,
                            `got shoved to the ground while attempting to run to The Heap.`,
                            `was too scared to go to The Heap and dashed to the forest instead.`,
                            `found food and water in a hiking pack at The Heap.`,
                            `slipped on the gravel and gave up on going to The Heap.`,
                            `took the gun at the pedestal in the center of The Heap.`,
                            `found a bow and quiver at the Heap.`
                        ]



                        /*   for (var i = 1; i <= 12; ++i) {         // rPlayer [1-12] Makes an array of randomly selected players
                               rPlayer[i] = startPlayers[Math.floor(Math.random() * startPlayers.length)];
                               startPlayers = arrayRemove(startPlayers, rPlayer[i]);
                           }   
                           
                      
                
                           for (var i = 1; i <= 12; ++i) {     // sStart [1-12] Makes an array of randomly selected actions
                               sStart[i] = start[Math.floor(Math.random() * start.length)];
                            }    */

                        var rPlayer = [];
                        var sStart = [];
                        var sPlay = [];

                        for (var i = 1; i <= 12; ++i) {

                            rPlayer[i] = startPlayers[Math.floor(Math.random() * startPlayers.length)];

                            startPlayers = arrayRemove(startPlayers, rPlayer[i]);

                            sStart[i] = start[Math.floor(Math.random() * start.length)];

                            sPlay[i] = `${rPlayer[i]} ${sStart[i]}`;

                            if (sPlay[i].includes(`[DEATH]`)) {
                                gamePlayers = arrayRemove(gamePlayers, rPlayer[i]);
                            }
                        }

                        const startingEmbed = new Discord.RichEmbed()   // Starting Embed (No deaths, just getting loot)
                            .setColor('018fe5')
                            .setTitle(`Discord Deathmatch - Starting Round`)
                            .setDescription(stripIndents`

                   **The siren sounded, the game has begun!**
                        
                      :blue_circle: ${sPlay[1]}
                      :blue_circle: ${sPlay[2]}
                      :blue_circle: ${sPlay[3]}
                      :red_circle: ${sPlay[4]}
                      :red_circle: ${sPlay[5]}
                      :red_circle: ${sPlay[6]}
                      :orange_circle: ${sPlay[7]}
                      :orange_circle: ${sPlay[8]}
                      :orange_circle: ${sPlay[9]}
                      :green_circle: ${sPlay[10]}
                      :green_circle: ${sPlay[11]}
                      :green_circle: ${sPlay[12]}

                        `)
                            .setFooter(`Controller: ${message.author.username}`, message.author.avatarURL);

                        console.log(gamePlayers);
                        return message.channel.send(startingEmbed)



                    } else return message.channel.send(`Game ended by ${message.author}`);
                })
        });
    },
};