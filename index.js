require('dotenv').config();
require('dotenv').load();
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./json/config.json")
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const min = 0;
const max = 1000;
const request = require('request');
const insultURL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'
const complimentURL = 'https://complimentr.com/api'
const DiscordAntiSpam = require("discord-anti-spam");

const activity = [
	'with my tail!',
	'with friends!',
	'D&D',
	'Runescape',
	'Cookie Clicker',
	'with my dad!',
	'with the neighbors',
	'with string!',
	'by myself :(',
	'with a ball',
	'with the cat'
]

// Listens for Errors and Warnings. Debug shows Discord Web Socket Information
client.on("error", (e) => console.log(e));
client.on("warn", (e) => console.log(e)); 

client.on("guildCreate", guild => {

	console.log(`< FennecBot joined server: ${guild.name} [ID = ${guild.id}] This server has ${guild.memberCount} members. >`);
});

client.on("guildDelete", guild => {

	console.log(`< FennecBot was removed from: ${guild.name} [ID = ${guild.id}] >`);
});


client.on('ready', () => {

    // Notifies that FennecBot has logged in, if message is not seen in console, check token or internet connection.
	console.log(`< LOGGED IN || Current Users: ${client.users.size}, Current Servers: ${client.guilds.size} >`)
	console.log(`< MADE BY FEARTHERENEGADE#7276 >`)


    // Activity of FennecBot
	var selectedActivity = activity[Math.floor(Math.random() * activity.length)];
	client.user.setActivity(selectedActivity);


})

const AntiSpam = new DiscordAntiSpam({
    warnThreshold: 4, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 6,
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban
    maxInterval: 2000, // Amount of time (in ms) in which messages are cosidered spam.
    warnMessage: "{@user}, Please stop spamming.", // Message will be sent in chat upon warning.
    banMessage: "**{user_tag}** has been banned for spamming.", // Message will be sent in chat upon banning.
    maxDuplicatesWarning: 7, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
    maxDuplicatesBan: 15, // Amount of same messages sent that will be considered as duplicates that will cause a ban.
    maxDuplicatesKick: 10,
    deleteMessagesAfterBanForPastDays: 1, // Amount of days in which old messages will be deleted. (1-7)
    exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"], // Bypass users with at least one of these permissions
    ignoreBots: true, // Ignore bot messages
    verbose: false, // Extended Logs from module
    kickEnabled: true,
    banEnabled: true
});


client.on("message", message => {

    AntiSpam.message(message);

	//			SETTINGS TABLE FOR BETTER-SQLITE3

	const Stable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'settings';").get();

	if (!Stable['count(*)']) {

		sql.prepare("CREATE TABLE settings (guildid TEXT PRIMARY KEY, guildname TEXT, nsfw TEXT, economy TEXT, music TEXT, prefix TEXT);").run();
		sql.prepare("CREATE UNIQUE INDEX idx_settings_id ON settings (id);").run();

		sql.pragma("synchronous = 1");
		sql.pragma("journal_mode = wal");

	}

	client.getSettings = sql.prepare("SELECT * FROM settings WHERE guildid = ?");
	client.setSettings = sql.prepare("INSERT OR REPLACE INTO settings (guildid, guildname, nsfw, economy, music, prefix) VALUES (@guildid, @guildname, @nsfw, @economy, @music, @prefix);");
	Settings = client.getSettings.get(message.guild.id);


	if (!Settings) {
		Settings = { guildid: message.guild.id, guildname: message.guild.name, nsfw: "false", economy: "true", music: "true", prefix: "//" }
	}
	client.setSettings.run(Settings);

	//			RANDOM INSULTS AND COMPLIMENTS


	// Number Generator
	var chanceGen = Math.floor(Math.random() * (max - min + 1)) + min;

	// Insults
    if (chanceGen == 74) {	// If number = 74, send an insult
        request(insultURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var base = JSON.parse(body)
                var insult = base.insult
                message.reply(insult)
            }
        })
	}

	// Compliments
	if (chanceGen == 402) {	// If number = 402, send a compliment
		request(complimentURL, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var base = JSON.parse(body)
				var compliment = base.compliment
				message.reply(compliment)
			}
		})
	}

});


    //Enmap Redirect with fs
    client.config = config;

    fs.readdir("./events/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            const event = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        });
    });

    client.commands = new Enmap();

    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./commands/${file}`);
			let commandName = file.split(".")[0];
            client.commands.set(commandName, props);
        });
    });

    process.on('unhandledRejection', error => {
        console.error('<< Unhandled Promise Error! >> \n' + error.stack);
    });

    //login to FennecBot
    client.login(process.env.BOT_TOKEN)
