const Discord = require("discord.js");

module.exports = {
    name: 'account',
    description: 'Find out how much money you have',
    aliases: ['money'],
    usage: '//account',
    cooldown: 0,
    execute(client, message, args, sql) {

        client.getAccount = sql.prepare("SELECT * FROM economy WHERE id = ?");
        client.setAccount = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
        account = client.getAccount.get(message.author.id);


        if (!account) {
            account = { id: message.author.id, cash: 200, bank: 100, user: message.author.username }
        }
        client.setAccount.run(account);

        const accountEmbed = new Discord.RichEmbed()
            .setColor(client.config.economyColor)
            .setTitle(`💰 ${message.author.username}'s Balance`)
            .addField("Cash", `$${account.cash}`, true)
            .addField("Bank", `$${account.bank}`, true);

        return message.channel.send(accountEmbed);
    },
};