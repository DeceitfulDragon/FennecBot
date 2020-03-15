const Discord = require("discord.js");
const { product } = require('../../assets/json/store.json');

module.exports = {
    name: 'store',
    description: 'Browse the store!',
    aliases: ['shop, market'],
    usage: '//store [item]',
    cooldown: 2,
    execute(client, message, args) {

       var request = args.join(" ");
       var request = request.toLowerCase();

        if (!request) {

            const storeEmbed = new Discord.RichEmbed()
                .setColor(client.config.economyColor)
                .setTitle(`:shopping_bags: Flynn's Lost and Found Emporium!`)  // Shop Name
                .setDescription(`Use //buy <item> to purchase something from the store!`)
                .setFooter(`Do //store <item> to get a description of the item!`)

            for (var i = 0; i <= 11; ++i) {
                storeEmbed.addField(`${product[i].emoji} ${product[i].name}`, `**$**${product[i].price} Credits`, true)
            }

            return message.channel.send(storeEmbed);

        } else {

            for (var i = 0; i < 11; i++) {
                if (request == product[i].name.toLowerCase()) {
                    message.reply(`**Item:** ${product[i].emoji} ${product[i].name}\n**Description:** ${product[i].description}`);
                   break;
                }
            }

        }
    },
};