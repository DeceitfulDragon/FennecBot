const { crime, fcrime } = require("../../assets/json/eco.json")
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const cmin = 1;
const cmax = 30;
const min = 100;
const max = 500;

module.exports = {
    name: 'crime',
    description: 'Commit a crime and earn some money!',
    aliases: ['rob'],
    usage: '//crime',
    cooldown: 60,
    execute(client, message, args) {

    client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
    client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
    Eco = client.getEco.get(message.author.id);

    var crimeChance = Math.floor(Math.random() * (cmax - cmin + 1)) + cmin;
    var money = Math.floor(Math.random() * (max - min + 1)) + min;
    var selectedCrime = crime[Math.floor(Math.random() * crime.length)];
    var failedCrime = fcrime[Math.floor(Math.random() * fcrime.length)];

    if (!Eco) return message.reply(`You don't have an bank account setup! Do //account and then come back to this command.`);

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
        },
};