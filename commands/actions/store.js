const Discord = require("discord.js");

module.exports = {
    name: 'store',
    description: 'Browse the store!',
    aliases: ['shop, market'],
    usage: '//store [item]',
    cooldown: 2,
    execute(client, message, args) {

        item = args.join(" ");
        item = item.toLowerCase();
        // Go down the list to check if there are any arguments to describe store items

        if (item == "penis pills") {

            return message.reply("**Item:** :pill: Penis Enlargment Pills\n**Description:** Dick too small? Or already too big? Why not add some more inches with Hamderg Brand Penis Pills! Adds 3 inches to your pp length.");

        } else if (item == "running shoes") {

            return message.reply("**Item:** :athletic_shoe: Running Shoes\n**Description:** Mom's good old running shoes, purchasable by having a pokemon mother or paying the $700 credits for it. Increases chances of escaping muggings and robberies.");

        } else if (item == "thief's tools") {

            return message.reply("**Item:** :toolbox: Thieve's Tools\n**Description:** Found some tools or something in a garage sale, could probably help you out, just don't do anything bad with them. Increases chances of successful robbings and crimes.");

        } else if (item == "computer") {

            return message.reply("**Item:** :desktop: Computer\n**Description:** Find better job offers on linkedin, and make more money -- is what I would say if you weren't just gonna watch futa porn on it all day. Grants higher working wages.");

        } else if (item == "porn magazine") {

            return message.reply("**Item:** :newspaper: Porn Magazine\n**Description:** What, the computer wasn't enough for you? Guess you can sit around like some boomer still using magazines to jerk off to women's ankles I guess. Weirdo.");

        } else if (item == "mystery box") {

            return message.reply("**Item:** :gift: Mystery Box\n**Description:** It's a fuckin' box man what else do you want, might have a dead cat or some cash in it, i don't know. I just found it in the walmart parking lot.");

        } else if (item == "wedding ring") {

            return message.reply("**Item:** :ring: Wedding Ring\n**Description:** Allows you to get married with someone!");

        } else if (item == "rigged die") {

            return message.reply("**Item:** :game_die: Rigged Die\n**Description:** I stuck some gum on the bottom of this monopoly dice, should get you something nice, fucking ~~cheetah~~ cheater. Increases odds of winning gambling games.");

        } else if (item == "gun") {

            return message.reply("**Item:** gun\n**Description:** placeholder");

        } else if (item == "harvesting kit") {

            return message.reply("**Item:** :knife: Harvesting Kit\n**Description:** Found a few kitchen knifes, you could probably use these to steal some organs. Allows you to use the Harvest command.");

        } else if (item == "foxphone") {

            return message.reply("**Item:** :iphone: foxPhone\n**Description:** I found a phone in one of those e-waste recyclers, looks like it works. Better wages for prositution.");

        } else if (item == "hat") {

            return message.reply("**Item:** :womans_hat: Hat\n**Description:** Stole this hat from an old lady, looks nice.");

        } else {

            // If no args, send the store listings

            const storeEmbed = new Discord.RichEmbed()
                .setColor(client.config.economyColor)
                .setTitle(`:shopping_bags: Flynn's Lost and Found Emporium! Page #1`)  // Shop Name
                .addField(`:pill: Penis Pills`, `**$**1500 Credits`, true)
                .addField(`:athletic_shoe: Running shoes`, `**$**700 Credits`, true)
                .addField(`:toolbox: Thief's Tools`, `**$**400 Credits`, true)
                .addField(`:desktop: Computer:`, `**$**500 Credits`, true)
                .addField(`:newspaper: Porn Magazine:`, `**$**100 Credits`, true)
                .addField(`:gift: Mystery Box:`, `**$**250 Credits`, true)
                .addField(`:ring: Wedding Ring:`, `**$**200 Credits`, true)
                .addField(`:game_die: Rigged Die`, `**$**500 Credits`, true)
                .addField(`:gun: GUN`, `**$**1000 Credits`, true)
                .addField(`:knife: Harvesting Kit`, `**$**700 Credits`, true)
                .addField(`:iphone: foxPhone`, `**$**250 Credits`, true)
                .addField(`:womans_hat: Hat`, `**$**100 Credits`, true);
            return message.channel.send(storeEmbed);

        }
    },
};