const { loot } = require("../../assets/json/eco.json")
const min = 10;
const max = 50;

module.exports = {
    name: 'loot',
    description: 'Get some loot.',
    usage: '//loot',
    cooldown: 1,
    execute(client, message, args, sql) {

        client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
        client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
        Eco = client.getEco.get(message.author.id);

        var money = Math.floor(Math.random() * (max - min + 1)) + min;
        var gLoot = loot[Math.floor(Math.random() * loot.length)];

        if (!Eco) {

            return message.reply(`You don't have an bank account setup! Do //account and then come back to this command.`);

        } else {

                Eco.cash += money;	// Put it into the cash

                client.setEco.run(Eco);

                return message.reply(`${gLoot} +**$${money}** added to your wallet.`);

        }
    },

};