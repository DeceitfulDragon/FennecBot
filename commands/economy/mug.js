const { mug } = require("../../assets/json/eco.json")
const max = 10;
const min = 0;

module.exports = {
    name: 'mug',
    description: 'Mug a user for some money.',
    usage: '//mug <user>',
    cooldown: 20,
    execute(client, message, args, sql) {
    
	const user = message.mentions.users.first() || client.users.get(args[0]); // Determine Target (First ping)

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");


            if (!user) return message.reply(`Please specify who you want to mug.`);

            var Victim = client.getEco.get(user.id);
            var Caller = client.getEco.get(message.author.id);

            var chanceGen = Math.floor(Math.random() * (max - min + 1)) + min;

            if (Victim == Caller) return message.reply(`...It doesn't work like that.`);

            if (!Victim || !Caller) {

                return message.reply("One of you doesn't have any cash to rob from!");

            } else {

                if (Victim.cash > 10) {

                    if (chanceGen < 3) {

                        money = Math.round(Victim.cash * 0.3);

                        Victim.cash -= money;
                        Caller.cash += money;

                        client.setEco.run(Victim);
                        client.setEco.run(Caller);

                        return message.channel.send(`${user} was just mugged by ${message.author} for **$${money}**.`);

                    } else {

                        var nMug = mug[Math.floor(Math.random() * mug.length)];

                        return message.reply(`${nMug} [You failed to mug ${user}].`);

                    }
                } else {

                    return message.reply(`lol they're too poor to rob.`);

                }
            }
        },
};