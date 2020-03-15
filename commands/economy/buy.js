const Discord = require("discord.js");
const prompter = require('discordjs-prompter');

const { product } = require('../../assets/json/store.json');

module.exports = {
    name: 'buy',
    description: 'Buy an item from the store.',
    aliases: ['purchase'],
    usage: '//buy <store item>',
    cooldown: 0,
    execute(client, message, args, sql) {

        client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
        client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
        Buyer = client.getEco.get(message.author.id);

        client.getInv = sql.prepare("SELECT * FROM inventory WHERE id = ?");
        client.setInv = sql.prepare("INSERT OR REPLACE INTO inventory (id, user, pills, shoes, thief, computer, magazine, box, ring, die, elixir, kit, foxphone, hat ) VALUES (@id, @user, @pills, @shoes, @thief, @computer, @magazine, @box, @ring, @die, @elixir, @kit, @foxphone, @hat);");
        Inv = client.getInv.get(message.author.id);

        if (!Inv) {
            Inv = {
                id: message.author.id, user: message.author.username, pills: 0, shoes: 0, thief: 0, computer: 0, magazine: 0, box: 0, ring: 0, die: 0, elixir: 0, kit: 0, foxphone: 0, hat: 0
            }
        }
        client.setInv.run(Inv);

        var hope = [
            'pills',
            'shoes',
            'thief',
            'computer',
            'magazine',
            'box',
            'ring',
            'die',
            'elixir',
            'kit',
            'foxphone',
            'hat'
        ]

        var item = args.join(" ");
        var item = item.toLowerCase();

        for (var i = 0; i < 11; i++) {

            if (item == product[i].name.toLowerCase()) {


                var price = parseInt(product[i].price);

                if (Buyer.cash < price) return message.reply(`Looks like you don't have enough for that, the price is **$${price}**.`)

                if (product[i].name.toLowerCase() == "penis pills") {

                    Buyer.cash -= price;

                    Inv.pills++;

                    client.setEco.run(Buyer);
                    client.setInv.run(Inv);

                    return message.channel.send(`You purchased ${product[i].name}!`);

                } else if (product[i].name.toLowerCase() == "hat") {

                    Buyer.cash -= price;

                    Inv.hat++;

                    client.setEco.run(Buyer);
                    client.setInv.run(Inv);

                    return message.channel.send(`You purchased a ${product[i].name}!`);

                } else if (product[i].name.toLowerCase() == "tiddy elixir") {

                    Buyer.cash -= price;

                    Inv.elixir++;

                    client.setEco.run(Buyer);
                    client.setInv.run(Inv);

                    return message.channel.send(`You purchased a ${product[i].name}!`);

                } else if (product[i].name.toLowerCase() == "porn magazine") {

                    Buyer.cash -= price;

                    Inv.magazine++;

                    client.setEco.run(Buyer);
                    client.setInv.run(Inv);

                    return message.channel.send(`You purchased a ${product[i].name}!`);

                } else {


                    Buyer.cash -= price;

                    var data = `UPDATE inventory
		                            SET ${hope[i]} = '1'
		                            WHERE id = ${message.author.id};`

                    client.setEco.run(Buyer);

                    sql.exec(data);

                    return message.channel.send(`You purchased (a) ${product[i].name}!`);
                }
            } 
        }
    },

};