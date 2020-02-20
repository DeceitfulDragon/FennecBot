const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const Discord = require("discord.js");
const prompter = require('discordjs-prompter');

module.exports = {
    name: 'buy',
    description: 'Buy an item from the store.',
    aliases: ['purchase'],
    usage: '//buy <store item>',
    cooldown: 0,
    execute(message, args) {

        client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
        client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
        Buyer = client.getEco.get(message.author.id);

        client.getInv = sql.prepare("SELECT * FROM inventory WHERE id = ?");
        client.setInv = sql.prepare("INSERT OR REPLACE INTO inventory (id, user, pills, shoes, thief, computer, magazine, box, ring, die, gun, kit, foxphone, hat ) VALUES (@id, @user, @pills, @shoes, @thief, @computer, @magazine, @box, @ring, @die, @gun, @kit, @foxphone, @hat);");
        Inv = client.getInv.get(message.author.id);


        if (!Inv) {
            Inv = {
                id: message.author.id, user: message.author.username, pills: 0, shoes: 0, thief: 0, computer: 0, magazine: 0, box: 0, ring: 0, die: 0, gun: 0, kit: 0, foxphone: 0, hat: 0
            }
        }
        client.setInv.run(Inv);

        item = args.join(" ");
        item = item.toLowerCase();

        if (item == "penis pills") {        // PILLS

            if (Buyer.cash < 1500) return message.reply(`too poor.`);

            if (Inv.pills >= 10) return message.reply(`You already have the max number of those, use them with //use penis pills!`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase Penis Pills?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 1500;
                        client.setEco.run(Buyer);

                        Inv.pills += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased Penis Pills!');

                    } else return message.channel.send('Transaction Cancelled');
                });

        } else if (item == "running shoes") {       // SHOES

            if (Buyer.cash < 700) return message.reply(`too poor.`);

            if (Inv.shoes >= 1) return message.reply(`You already have running shoes!`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase Running Shoes?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 700;
                        client.setEco.run(Buyer);

                        Inv.shoes += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased Running Shoes!');

                    } else return message.channel.send('Transaction Cancelled');
                });

        } else if (item == "thief's tools") {       // TOOLS

            if (Buyer.cash < 2000) return message.reply(`too poor.`);

            if (Inv.thief >= 1) return message.reply(`You already have Thief's Tools!`);

            prompter
                .reaction(message.channel, {
                    question: "Are you sure you wish to purchase Thief's Tools?",
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 2000;
                        client.setEco.run(Buyer);

                        Inv.thief += 1;
                        client.setInv.run(Inv);

                        return message.channel.send(`You purchased Thief's Tools!`);

                    } else return message.channel.send('Transaction Cancelled');
                });

        } else if (item == "computer") {        // COMPUTER

            if (Buyer.cash < 800) return message.reply(`too poor.`);

            if (Inv.computer >= 1) return message.reply(`You already have a Computer!`);

            prompter
                .reaction(message.channel, {
                    question: "Are you sure you wish to purchase a Computer?",
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 800;
                        client.setEco.run(Buyer);

                        Inv.computer += 1;
                        client.setInv.run(Inv);

                        return message.channel.send(`You purchased Thief's Tools!`);

                    } else return message.channel.send('Transaction Cancelled');
                });


        } else if (item == "porn magazine") {       // MAGAZINE

            if (Buyer.cash < 100) return message.reply(`too poor.`);

            if (Inv.magazine >= 10) return message.reply(`You already have the max number of those.`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase a Porn Magazine?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 100;
                        client.setEco.run(Buyer);

                        Inv.magazine += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased a Porn Magazine');

                    } else return message.channel.send('Transaction Cancelled');
                });

        } else if (item == "mystery box") {         // MYSTERY

            if (Buyer.cash < 500) return message.reply(`too poor.`);

            if (Inv.box >= 10) return message.reply(`You already have the max number of those, open them with //use mystery box!`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase a Mystery Box?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 500;
                        client.setEco.run(Buyer);

                        Inv.box += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased a Mystery Box');

                    } else return message.channel.send('Transaction Cancelled');
                });

        } else if (item == "wedding ring") {        // RING

            if (Buyer.cash < 300) return message.reply(`too poor.`);

            if (Inv.ring >= 1) return message.reply(`You already have that!`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase a Wedding Ring?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 300;
                        client.setEco.run(Buyer);

                        Inv.ring += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased a Wedding Ring!');

                    } else return message.channel.send('Transaction Cancelled');
                });

        } else if (item == "rigged die") {          // DIE

            if (Buyer.cash < 600) return message.reply(`too poor.`);

            if (Inv.die >= 1) return message.reply(`You already have that!`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase a Rigged Die?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 600;
                        client.setEco.run(Buyer);

                        Inv.die += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased a Rigged Die!');

                    } else return message.channel.send('Transaction Cancelled');
                });

        } else if (item == "gun") {                 // GUN


        } else if (item == "harvesting kit") {      // KIT

            if (Buyer.cash < 800) return message.reply(`too poor.`);

            if (Inv.kit >= 1) return message.reply(`You already have that!`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase a Harvesting Kit?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 800;
                        client.setEco.run(Buyer);

                        Inv.kit += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased a Harvesting Kit!');

                    } else return message.channel.send('Transaction Cancelled');
                });


        } else if (item == "foxphone") {            // FOXPHONE

            if (Buyer.cash < 250) return message.reply(`too poor.`);

            if (Inv.foxphone >= 1) return message.reply(`You already have that!`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase a foxPhone?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 250;
                        client.setEco.run(Buyer);

                        Inv.foxphone += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased a foxPhone!');

                    } else return message.channel.send('Transaction Cancelled');
                });


        } else if (item == "hat") {                 // HAT

            if (Buyer.cash < 300) return message.reply(`too poor.`);

            if (Inv.hat >= 100) return message.reply(`You already have enough of those!`);

            prompter
                .reaction(message.channel, {
                    question: 'Are you sure you wish to purchase a Hat?',
                    userId: message.author.id,
                })
                .then(response => {
                    if (!response) return message.reply('you took too long!');

                    if (response === 'yes') {

                        Buyer.cash -= 100;
                        client.setEco.run(Buyer);

                        Inv.hat += 1;
                        client.setInv.run(Inv);

                        return message.channel.send('You purchased a Hat!');

                    } else return message.channel.send('Transaction Cancelled');
                });


        } else {
            return;
        }
    },

};