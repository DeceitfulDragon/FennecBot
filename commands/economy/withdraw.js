
module.exports = {
    name: 'withdraw',
    description: 'Withdraw money from your bank account.',
    usage: '//withdraw <money>',
    cooldown: 1,
    execute(client, message, args, sql) {

        const money = parseInt(args);

        var content = message.content;
        var parts = content.split(" ");
        var check = parts[1];

        client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
        client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
        Eco = client.getEco.get(message.author.id);

        if (!Eco) {

            return message.reply(`You don't have an Eco account setup! Do //account and then come back to this command.`);

        } else {

            if (!check) {

                return message.reply("I can't withdraw nothing! Please specify the amount!")

            } else {

                if (!isNaN(money) && money > 0) {

                    if (Eco.bank >= money) {

                        let mon = client.getEco.get(message.author.id);

                        mon.bank = parseInt(mon.bank) - money;
                        // I literally cannot believe the solution to withdraw was to put the bank part above the cash
                        mon.cash = parseInt(mon.cash) + money;


                        client.setEco.run(mon);

                        return message.reply(`$${money} has been added to your wallet. Try not to get mugged!`)

                    } else {

                        return message.reply("HAH YOU'RE TOO POOR FOR THAT!")

                    }
                } else {

                    return message.reply(`Please specify a correct number.`);

                }
            }
        }
    },
};