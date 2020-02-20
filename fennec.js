require('dotenv').config();
require('dotenv').load();
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const config = require("./assets/json/config.json")
const client = new Discord.Client();
const chalk = require('chalk');
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

// Listens for Errors and Warnings. Debug shows Discord Web Socket Information
client.on("error", (e) => console.log(e));
client.on("warn", (e) => console.log(e)); 

client.on("guildCreate", guild => { console.log(chalk.yellow.bold(`< FennecBot joined server: ${guild.name} [ID = ${guild.id}] This server has ${guild.memberCount} members. >`));});

client.on("guildDelete", guild => { console.log(chalk.yellow.bold(`< FennecBot was removed from: ${guild.name} [ID = ${guild.id}] >`));});

    client.config = config;

    fs.readdir("./events/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            const event = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        });
    });


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


const modules = [
    'fun',
    'memes',
    'misc',
    'moderation',
    'utility',
    'developer',
    'nsfw',
    'economy',
    'games',
    'actions'
];

modules.forEach(c => {

    fs.readdir(`./commands/${c}/`, (err, files) => {  if (err) throw err; 
        console.log(chalk.white(`> Loaded `) + chalk.blue.bold(files.length) + chalk.white(` commands from the `) + chalk.blue.bold(c) + chalk.white(` module`)); 

        files.forEach(f => { 
         const command = require(`./commands/${c}/${f}`);
            client.commands.set(command.name, command); 

            //client.commands.aliases.forEach(aliases => { 
               // client.aliases.set(aliases, command.name); 
           // });
        });
    });
});

    process.on('unhandledRejection', error => {
        console.error(chalk.red('<< ERROR FOUND >> \n' + error.stack));
    });

    //login to FennecBot
    client.login(process.env.BOT_TOKEN)
