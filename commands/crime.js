const { crime } = require("../json/eco.json")
const { fcrime } = require("../json/eco.json")
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const crimeTimer = new Set();

const cmin = 1;
const cmax = 30;
const min = 100;
const max = 500;

exports.run = (client, message) => {

    client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
    client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
    Eco = client.getEco.get(message.author.id);

    var crimeChance = Math.floor(Math.random() * (cmax - cmin + 1)) + cmin;
    var money = Math.floor(Math.random() * (max - min + 1)) + min;
    var selectedCrime = crime[Math.floor(Math.random() * crime.length)];
    var failedCrime = fcrime[Math.floor(Math.random() * fcrime.length)];

    if (!Eco) return message.reply(`You don't have an bank account setup! Do ${client.config.prefix}money and then come back to this command.`);

    if (!crimeTimer.has(message.author.id)) {

        if (crimeChance >= 20) {

            Eco.cash += money;

            client.setEco.run(Eco);

            crimeTimer.add(message.author.id);
            setTimeout(() => {
                crimeTimer.delete(message.author.id);
            }, 600000);

            return message.reply(`${selectedCrime} +**$${money}** added to your stash!`);

        } else {

            crimeTimer.add(message.author.id);
            setTimeout(() => {
                crimeTimer.delete(message.author.id);
            }, 900000);

            return message.reply(`${failedCrime}`);

        }

    } else {

        return message.reply(`You need to lay low for a little while before doing that again (Timeout is 60 minutes total if you succeeded before, 90 if you failed)`);

    }



};