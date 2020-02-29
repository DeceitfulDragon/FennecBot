const { mug } = require("../../assets/json/eco.json");
const talkedRecently = new Set();

module.exports = {
    name: 'mug',
    description: 'Mug a user for some money.',
    usage: '//mug <user>',
    cooldown: 20,
    execute(client, message, args, sql) {

        if (talkedRecently.has(message.author.id)) return message.reply(`You're on a cooldown buddy, take a breather. (Timeout = 60 minutes)`);

	const user = message.mentions.users.first() || client.users.get(args[0]); // Determine Target (First ping)

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");

        client.getInv = sql.prepare("SELECT * FROM inventory WHERE id = ?");
        client.setInv = sql.prepare("INSERT OR REPLACE INTO inventory (id, user, pills, shoes, thief, computer, magazine, box, ring, die, gun, kit, foxphone, hat ) VALUES (@id, @user, @pills, @shoes, @thief, @computer, @magazine, @box, @ring, @die, @gun, @kit, @foxphone, @hat);");
        Inv = client.getInv.get(user.id);

        if (!Inv) {
            Inv = {
                id: user.id, user: message.author.username, pills: 0, shoes: 0, thief: 0, computer: 0, magazine: 0, box: 0, ring: 0, die: 0, gun: 0, kit: 0, foxphone: 0, hat: 0
            }
        }

        if (Inv.shoes = 1) {
            var min = 2;
            var max = 10;
        } else {
            var min = 0;
            var max = 10;
        }

            if (!user) return message.reply(`Please specify who you want to mug.`);

            var Victim = client.getEco.get(user.id);
            var Caller = client.getEco.get(message.author.id);

            var chanceGen = Math.floor(Math.random() * (max - min + 1)) + min;

            if (Victim == Caller) return message.reply(`...It doesn't work like that.`);

            if (!Victim || !Caller) {

                return message.reply("One of you doesn't have any cash to rob from!");

            } else {

                if (Victim.cash > 10) {

                    if (chanceGen < 5) {

                        money = Math.round(Victim.cash * 0.3);

                        Victim.cash -= money;
                        Caller.cash += money;

                        client.setEco.run(Victim);
                        client.setEco.run(Caller);

                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                        }, 10000);

                        return message.channel.send(`${user} was just mugged by ${message.author} for **$${money}**.`);

                    } else {

                        var nMug = mug[Math.floor(Math.random() * mug.length)];

                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                        }, 10000);

                        return message.reply(`${nMug} [You failed to mug ${user}].`);

                    }
                } else {

                    return message.reply(`lol they're too poor to rob.`);

                }
            }
        },
};