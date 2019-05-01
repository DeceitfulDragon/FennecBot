const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const Discord = require("discord.js");
const perm = 'ADMINISTRATOR';
exports.run = (client, message, args) => {

	var content = message.content;
	var parts = content.split(" ");
	const module = parts[1];
	const setting = parts[2];

	client.getSettings = sql.prepare("SELECT * FROM settings WHERE guildid = ?");
	client.setSettings = sql.prepare("INSERT OR REPLACE INTO settings (guildid, guildname, nsfw, economy, music) VALUES (@guildid, @guildname, @nsfw, @economy, @music);");
	Settings = client.getSettings.get(message.guild.id);

	if (!Settings) {
		Settings = { guildid: message.guild.id, guildname: message.guild.name, nsfw: "false", economy: "true", music: "true" }
	}
	client.setSettings.run(Settings);


	if (message.member.hasPermission(perm)) {

		if (module == 'nsfw' || module == 'NSFW' || module == 'Nsfw') {		// NSFW SETTING

			if (setting == 'true' || setting == 'True') {

				var data = `UPDATE settings
			SET nsfw = 'true'
			WHERE guildid = ${message.guild.id};`

				sql.exec(data);

				return message.reply(`Changed the NSFW Module setting to: **True**.`);

			} else if (setting == `false` || setting == `False`) {

				var data = `UPDATE settings
			SET nsfw = 'false'
			WHERE guildid = ${message.guild.id};`

				sql.exec(data);

				return message.reply(`Changed the NSFW Module setting to: **False**.`);

			} else {

				return message.reply(`Please specify what you would like to change it to! (True/False)`);

			}

		} else if (module == 'economy' || module == 'Economy') {		// ECONOMY SETTING

			if (setting == 'true' || setting == 'True') {

				var data = `UPDATE settings
			SET economy = 'true'
			WHERE guildid = ${message.guild.id};`

				sql.exec(data);

				return message.reply(`Changed the Economy Module setting to: **True**.`);

			} else if (setting == `false` || setting == `False`) {

				var data = `UPDATE settings
			SET economy = 'false'
			WHERE guildid = ${message.guild.id};`

				sql.exec(data);

				return message.reply(`Changed the Economy Module setting to: **False**.`);

			} else {

				return message.reply(`Please specify what you would like to change it to! (True/False)`);

			}

		} else if (module == 'music' || module == 'music') {		// MUSIC SETTING

			if (setting == 'true' || setting == 'True') {

				var data = `UPDATE settings
			SET music = 'true'
			WHERE guildid = ${message.guild.id};`

				sql.exec(data);

				return message.reply(`Changed the Music Module setting to: **True**.`);

			} else if (setting == `false` || setting == `False`) {

				var data = `UPDATE settings
			SET music = 'false'
			WHERE guildid = ${message.guild.id};`

				sql.exec(data);

				return message.reply(`Changed the Music Module setting to: **False**.`);

			} else {

				return message.reply(`Please specify what you would like to change it to! (True/False)`);

			}

		} else {

			const settingEmbed = new Discord.RichEmbed()
				.setColor(client.config.helpColor)
				.setTitle(`Current Server Settings`)
				.setDescription(`To change any of these settings,\ndo //settings <module> <true/false>`)
				.addField(`NSFW:`, Settings.nsfw)
				.addField(`Economy:`, Settings.economy)
				.addField(`Music`, Settings.music)
				.setFooter(`FennecBot Version: ${client.config.botversion}`);
			return message.channel.send(settingEmbed);

		}
	} else {

		return message.reply(`Sorry Bucko! You need Administrator permissions on discord to mess with the settings!`);

	}



};