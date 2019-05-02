const Discord = require("discord.js"); 

const max = 6
const min = 1

exports.run = (client, message) => {
    var rrNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // live
    const lifeEmbed = new Discord.RichEmbed()
        .setColor('#04FF00') //green
        .setAuthor(`Russian Roulette | ${message.author.username}`)
        .setDescription(`*${message.author.username} loads a single 38mm round into the M1845-Revolver before spinning the cylinder and slowly aiming the muzzle against their chin. They then begin to slowly pull back the hammer, giving a deep breath before hesitantly pulling the trigger. Nothing is fired, ${message.author.username} giving a sigh of relief.*`)
        .setFooter("FennecBot Version: " + client.config.botversion);

    // die
    const deathEmbed = new Discord.RichEmbed()
        .setColor('#FF0000') //red
        .setAuthor(`Russian Roulette | ${message.author.username}`)
        .setDescription(`*${message.author.username} loads a single 38mm round into the M1845-Revolver before spinning the cylinder and slowly aiming the muzzle against their chin. They then begin to slowly pull back the hammer, giving a deep breath before hesitantly pulling the trigger. A bullet is fired through their jaw and into their skull with the deafening sound of a gunshot. The gun falls out of ${message.author.username}'s hand, falling to the floor with a 'thud' as their lifeless body slumps back in the chair* `)
        .setFooter("FennecBot Version: " + client.config.botversion);



    if (rrNum < 5) {
        return message.channel.send(lifeEmbed)
    } else {
        return message.channel.send(deathEmbed)
    }
};