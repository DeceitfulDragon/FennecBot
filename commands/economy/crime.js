const { crime, fcrime } = require("../../assets/json/eco.json")

const min = 100;
const max = 500;
const talkedRecently = new Set();
module.exports = {
    name: 'crime',
    description: 'Commit a crime and earn some money!',
    aliases: ['rob'],
    usage: '//crime',
    cooldown: 60,
    execute(client, message, args, sql) {

        if (talkedRecently.has(message.author.id)) return message.reply(`You're on a cooldown buddy, take a breather. (Timeout = 30 minutes)`);

    client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
    client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
        Eco = client.getEco.get(message.author.id);

        client.getInv = sql.prepare("SELECT * FROM inventory WHERE id = ?");
        client.setInv = sql.prepare("INSERT OR REPLACE INTO inventory (id, user, pills, shoes, thief, computer, magazine, box, ring, die, elixir, kit, foxphone, hat ) VALUES (@id, @user, @pills, @shoes, @thief, @computer, @magazine, @box, @ring, @die, @elixir, @kit, @foxphone, @hat);");
        Inv = client.getInv.get(message.author.id);

        if (!Inv) {
            Inv = {
                id: message.author.id, user: message.author.username, pills: 0, shoes: 0, thief: 0, computer: 0, magazine: 0, box: 0, ring: 0, die: 0, elixir: 0, kit: 0, foxphone: 0, hat: 0
            }
        }
        client.setInv.run(Inv);
        
        if (Inv.thief = 1) {
            var cmin = 10;
            var cmax = 30;
        } else {
            var cmin = 1;
            var cmax = 30;
        }

    var crimeChance = Math.floor(Math.random() * (cmax - cmin + 1)) + cmin;
    var money = Math.floor(Math.random() * (max - min + 1)) + min;
    var selectedCrime = crime[Math.floor(Math.random() * crime.length)];
    var failedCrime = fcrime[Math.floor(Math.random() * fcrime.length)];

    if (!Eco) return message.reply(`You don't have an bank account setup! Do //account and then come back to this command.`);

            if (crimeChance >= 20) {

                Eco.cash += money;

                client.setEco.run(Eco);

                talkedRecently.add(message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 30000);

                return message.reply(`${selectedCrime} +**$${money}** added to your stash!`);

            } else {

                talkedRecently.add(message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 30000);

                return message.reply(`${failedCrime}`);

            }
        },
};