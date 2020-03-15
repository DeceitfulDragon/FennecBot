const { work } = require("../../assets/json/eco.json")
const min = 100;
const max = 130;
const talkedRecently = new Set();

module.exports = {
    name: 'work',
    description: 'Make some money by working.',
    aliases: ['job'],
    usage: '//work',
    cooldown: 10,
    execute(client, message, args, sql) {

        if (talkedRecently.has(message.author.id)) return message.reply(`You're on a cooldown buddy, take a breather. (Timeout = 60 minutes)`);

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

        if (Inv.computer = 1) {
            var minO = 4;
            var maxO = 10;
        } else {
            var minO = 0;
            var maxO = 10;
        }

        var overTime = Math.floor(Math.random() * (maxO - minO + 1)) + minO;
        var money = Math.floor(Math.random() * (max - min + 1)) + min;
        var nWork = work[Math.floor(Math.random() * work.length)];

        if (!Eco) {

            return message.reply(`You don't have an bank account setup! Do ${client.config.prefix}money and then come back to this command.`);

        } else {

            if (overTime > 5) { // If overTime is greater than 5 on the generator, then the overtime bonus is added

                var oMoney = Math.floor(Math.random() * (maxO - minO + 1)) + minO;	// OVERTIME MONEY GEN

                var tMoney = oMoney + money;

                Eco.cash += tMoney;

                client.setEco.run(Eco);

                talkedRecently.add(message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 60000);

                return message.reply(`You did some overtime at your dead-end office job! +**$${tMoney}** added to your wallet`);

            } else {


                Eco.cash += money;

                client.setEco.run(Eco);

                talkedRecently.add(message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 60000);

                return message.reply(`${nWork} +**$${money}** added to your wallet`);

            }
        }
    },
};