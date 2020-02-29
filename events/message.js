const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const request = require('request');
const min = 0;
const max = 1000;
const insultURL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'
const complimentURL = 'https://complimentr.com/api'
const DiscordAntiSpam = require('discord-anti-spam');
const chalk = require('chalk');
const client = require('../fennec.js');
const Discord = require("discord.js");

module.exports = (client, message) => {


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

    const cooldowns = new Discord.Collection();
   // client.aliases = new Discord.Collection();


    const prefix = client.config.prefix;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

   //const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName) || client.commands.find(command => command.aliases) && command.aliases.includes(commandName);

    if (!command) return;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(client, message, args, sql);
    } catch (error) {
        console.error(chalk.red(error));
        message.reply('there was an error trying to run that command! Tell a developer!');
    }


   // AntiSpam.message(message);



    //			SETTINGS TABLE FOR BETTER-SQLITE3

    const Stable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'settings';").get();

    if (!Stable['count(*)']) {

        sql.prepare("CREATE TABLE settings (guildid TEXT PRIMARY KEY, guildname TEXT, nsfw TEXT, economy TEXT, music TEXT);").run();
        sql.prepare("CREATE UNIQUE INDEX idx_settings_id ON settings (id);").run();

        sql.pragma("synchronous = 1");
        sql.pragma("journal_mode = wal");

    }

    client.getSettings = sql.prepare("SELECT * FROM settings WHERE guildid = ?");
    client.setSettings = sql.prepare("INSERT OR REPLACE INTO settings (guildid, guildname, nsfw, economy, music) VALUES (@guildid, @guildname, @nsfw, @economy, @music);");
    Settings = client.getSettings.get(message.guild.id);


    if (!Settings) {
        Settings = { guildid: message.guild.id, guildname: message.guild.name, nsfw: "false", economy: "true", music: "true" }
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


};