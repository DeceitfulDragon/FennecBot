const max = 130;
const min = 50;

const talkedRecently = new Set();


module.exports = {
    name: 'prostitute',
    description: 'Whore yourself out and make some cash.',
    aliases: ['whore'],
    usage: '//prostitute',
    cooldown: 2,
    execute(client, message, args, sql) {

        // Getting SQL Stuff

        if (talkedRecently.has(message.author.id)) return message.reply(`You're on a cooldown buddy, take a breather. (Timeout = 40 minutes)`);


        client.getDick = sql.prepare("SELECT * FROM sizes WHERE id = ?");
        Dick = client.getDick.get(message.author.id);

        client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
        client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
        Eco = client.getEco.get(message.author.id);

        client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
        Profile = client.getProfile.get(message.author.id);


        client.getInv = sql.prepare("SELECT * FROM inventory WHERE id = ?");
        client.setInv = sql.prepare("INSERT OR REPLACE INTO inventory (id, user, pills, shoes, thief, computer, magazine, box, ring, die, elixir, kit, foxphone, hat ) VALUES (@id, @user, @pills, @shoes, @thief, @computer, @magazine, @box, @ring, @die, @elixir, @kit, @foxphone, @hat);");
        Inv = client.getInv.get(message.author.id);

        if (!Inv) {
            Inv = {
                id: message.author.id, user: message.author.username, pills: 0, shoes: 0, thief: 0, computer: 0, magazine: 0, box: 0, ring: 0, die: 0, elixir: 0, kit: 0, foxphone: 0, hat: 0
            }
        }
        client.setInv.run(Inv);

       if (!Dick) return message.reply("//pp pleeeease~");

        if (!Eco) return message.reply(`You don't have an Eco account setup! Do //money and then come back to this command.`);




        if (Inv.phone = 1) {
            var cmin = 4;
            var cmax = 10;
        } else {
            var cmin = 0;
            var cmax = 10;
        }



        var money = Math.floor(Math.random() * (max - min + 1)) + min;	// Random Money Gen (50 - 130)

        var chance = Math.floor(Math.random() * (cmax - cmin + 1)) + cmin; // Chance


        if (chance > 5) {

            if (Dick.size > 20) {

                Eco.cash += money;
                Eco.cash += 100;

                client.setEco.run(Eco);

                talkedRecently.add(message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 40000);

                return message.reply(`You had a saucy night out with your client and got paid **$${money}**! With your sizeable tool, you made an extra **$100**!`);

            } else {

                Eco.cash += money;
                Eco.cash += 100;

                client.setEco.run(Eco);

                talkedRecently.add(message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 40000);

                return message.reply(`You had a saucy night out with your client and got paid **$${money}**!`);

            }

        } else {

            Eco.cash += money;
            Eco.cash += 100;

            client.setEco.run(Eco);

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 40000);


            return message.reply(`You stood outside the nightclub for an hour or so, but no one came by for your services.`);
        }
 },
};