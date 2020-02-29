const Discord = require("discord.js");
const { stripIndents } = require('common-tags');

module.exports = {
    name: 'inventory',
    description: 'Open your inventory or use an item.',
    aliases: ['inv'],
    usage: '//inventory [item]',
    cooldown: 1,
    execute(client, message, args, sql) {

        var item = args.join(" ");
        var item = item.toLowerCase();

        client.getInv = sql.prepare("SELECT * FROM inventory WHERE id = ?");
        client.setInv = sql.prepare("INSERT OR REPLACE INTO inventory (id, user, pills, shoes, thief, computer, magazine, box, ring, die, gun, kit, foxphone, hat ) VALUES (@id, @user, @pills, @shoes, @thief, @computer, @magazine, @box, @ring, @die, @gun, @kit, @foxphone, @hat);");
        Inv = client.getInv.get(message.author.id);

        client.getScore = sql.prepare("SELECT * FROM sizes WHERE id = ?");
        client.setScore = sql.prepare("INSERT OR REPLACE INTO sizes (id, size, name) VALUES (@id, @size, @name);");
        score = client.getScore.get(message.author.id);

        if (!Inv) {
            Inv = {
                id: message.author.id, user: message.author.username, pills: 0, shoes: 0, thief: 0, computer: 0, magazine: 0, box: 0, ring: 0, die: 0, gun: 0, kit: 0, foxphone: 0, hat: 0
            }
        }


        function emoji(object) { // Custom function to return with a check-mark or X depending on value of inventory
            if (object == 1) {
                return `:white_check_mark:`;
            } else {
                return `❌`;
            }
        }
    
        if (!score) return message.reply(`I don't know your dick size yet! Go on over to the randomizer at //pp and come back with your pants down to help me out!`);


        if (item == "penis pills") {

            if (Inv.pills > 0) {

                Inv.pills -= 1;

                score.size += 3;

                client.setInv.run(Inv);
                client.setScore.run(score);
            } else {
                return message.reply(`You don't have any of those to use try //buy!`)
            }

            return message.reply(`You took one of your patented Hamderg-Brand Penis Pills and watched your dick grow about three inches bigger! It's now **${score.size} inches** long! uwu.`);

        } else if (item == "mystery box") {

            return message.reply(`Not yet made.`);

        } else {

            const invEmbed = new Discord.RichEmbed()
                .setColor(client.config.economyColor)
                .setTitle(`${message.author.username}'s Inventory`)
                .setDescription(stripIndents`
               :womans_hat: Hats: **${Inv.hat}**
               :pill: Penis Pills: **${Inv.pills}**
               :gift: Mystery Boxes: **${Inv.box}**
               :newspaper: Porn Magazines: **${Inv.magazine}**

               :gun: Gun: ${emoji(Inv.gun)}
               :iphone: foxPhone: ${emoji(Inv.foxphone)}
               :desktop: Computer: ${emoji(Inv.computer)}
               :game_die: Rigged Die: ${emoji(Inv.die)}
               :toolbox: Thief's Tools: ${emoji(Inv.thief)}
               :knife: Harvesting Kit: ${emoji(Inv.kit)}
               :ring: Wedding Ring: ${emoji(Inv.ring)}
               :athletic_shoe: Running Shoes: ${emoji(Inv.shoes)}
`           );

            return message.channel.send(invEmbed);

        }

    },
};