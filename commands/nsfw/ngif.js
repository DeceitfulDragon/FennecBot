const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const sreddits = [
    "NSFW_GIF",
    "nsfw_gifs",
    "porninfifteenseconds",
    "60FPSPorn",
    "porn_gifs",
    "nsfw_Best_Porn_Gif",
    "LipsThatGrip",
    "adultgifs"
]

module.exports = {
    name: 'ngif',
    description: 'Get a nsfw gif to look at.',
    aliases: ['nsfwgif'],
    usage: '//ngif',
    cooldown: 2,
    execute(client, message, args, sql) {

        client.getSettings = sql.prepare("SELECT * FROM settings WHERE guildid = ?");
        client.setSettings = sql.prepare("INSERT OR REPLACE INTO settings (guildid, guildname, nsfw, economy, music) VALUES (@guildid, @guildname, @nsfw, @economy, @music);");
        Settings = client.getSettings.get(message.guild.id);

        if (!Settings) {
            Settings = { guildid: message.guild.id, guildname: message.guild.name, nsfw: "false", economy: "true", music: "true" }
        }
        client.setSettings.run(Settings);

        if (Settings.nsfw == 'true') {

            if (!message.channel.nsfw) {
                message.react('🚫');
                return message.channel.send("Sorry, this isn't a NSFW Channel.");
            }

            var ranSub = sreddits[Math.floor(Math.random() * sreddits.length)];

            randomPuppy(ranSub)
                .then(url => {
                    const gifEmbed = new Discord.RichEmbed()
                        .setAuthor("Random NSFW Gif")
                        .setImage(url)
                        .setColor(client.config.naughtyColor)
                    return message.channel.send(gifEmbed);
                })
        } else {

            return message.channel.send("NSFW Module is disabled for this server! Tell someone with administrative privileges to do //settings to change it.");

        }
    },
};