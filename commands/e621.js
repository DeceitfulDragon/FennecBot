const Discord = require('discord.js');
const booru = require('booru');
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message, args) => {

	client.getSettings = sql.prepare("SELECT * FROM settings WHERE guildid = ?");
	client.setSettings = sql.prepare("INSERT OR REPLACE INTO settings (guildid, guildname, nsfw, economy, music) VALUES (@guildid, @guildname, @nsfw, @economy, @music);");
	Settings = client.getSettings.get(message.guild.id);

	if (!Settings) {
		Settings = { guildid: message.guild.id, guildname: message.guild.name, nsfw: "false", economy: "true", music: "true" }
	}
	client.setSettings.run(Settings);

	var query = args;

	if (Settings.nsfw == 'true') {

    if (!message.channel.nsfw) {
        message.react('🚫');
        return message.channel.send("Sorry, this isn't a NSFW Channel.");
    }

    // Checks if the content has Loli or Gore in it
    if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('Sorry, that violates Discord TOS.');



    // uses the booru search module
    booru.search('e621', query, { limit: 1, random: true })
        .then(booru.commonfy)
        .then(images => {
            for (let image of images) {
                // Embed for the image
				const naughtyEmbed = new Discord.RichEmbed()
					.setAuthor(`E621 | ${query}`)
					.setImage(image.common.file_url)
					.setColor(client.config.naughtyColor);

                return message.channel.send(naughtyEmbed);
            }
            // Catch any errors
       }) .catch(err => {
            console.log(err)
            return message.channel.send(`Nothing found for **${query}**`);
            })

	} else {

		return message.channel.send("NSFW Module is disabled for this server! Tell someone with administrative privileges to do //settings to change it.");

	}
};


