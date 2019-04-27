require('dotenv').config();
require('dotenv').load();
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./json/config.json");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const min = 0;
const max = 200;
const request = require('request');
const insultURL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'
const complimentURL = 'https://complimentr.com/api'

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
	// This event triggers when the bot joins a guild.
	console.log(`< FennecBot joined guild: ${guild.name} [ID = ${guild.id}] This guild has ${guild.memberCount} members. >`);
});

client.on("guildDelete", guild => {
	// Triggers when the bot is removed from a guild.
	console.log(`< FennecBot was removed from: ${guild.name} [ID = ${guild.id}] >`);
});


client.on('ready', () => {

    // Notifies that FennecBot has logged in, if message is not seen in console, check token or internet connection.
	console.log(`< LOGGED IN || Current Users: ${ client.users.size }, Current Servers: ${ client.guilds.size } >`)


    // Activity of FennecBot
	var selectedActivity = activity[Math.floor(Math.random() * activity.length)];
	client.user.setActivity(selectedActivity);

   //      BETTER-SQLITE3 STUFF 

    const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'pointchart';").get();
	if (!table['count(*)']) {
		
        sql.prepare("CREATE TABLE pointchart (id TEXT PRIMARY KEY, user TEXT, points INTEGER, level INTEGER);").run();
        sql.prepare("CREATE UNIQUE INDEX idx_pointchart_id ON pointchart (id);").run();
        sql.pragma("synchronous = 1");
        sql.pragma("journal_mode = wal");
    }



})





client.on("message", message => {

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
	if (chanceGen == 4) {	// If number = 4, send a compliment
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

    process.on('unhandledRejection', err => {
        console.error('Uncaught Promise Error! \n' + err.stack);
    });

    //login to FennecBot
    client.login(process.env.BOT_TOKEN)
