const Discord = require("discord.js");

module.exports = {
    name: 'child',
    description: '...',
    aliases: ['children'],
    usage: '//child',
    cooldown: 1,
    execute(client, message, args) {
        if (client.config.helpers.includes(message.author.id) == true) {

            const race = ["Human", "Dragon"]
            const gender = [
                "Male",
                "Male",
                "Female",
                "Futanari"
            ];
            const height = [
                /* "5 feet",
                 "5 feet",
                 "6 feet",*/
                "7 feet",
                "8 feet",
                "8 feet",
                "9 feet",
                "10 feet"
            ];
            const bodyColor = [
                // "Black with a white underbelly",
                // "White with black underbelly",
                //"White with purple underbelly",
                "  ",
                // "Purple with white underbelly"
            ];
            const eyeColor = [
                "Black",
                "Cyan Blue",
                "Dark Blue"
            ];
            const breastSize = [
                "B-Cup",
                "C-Cup",
                "D-Cup",
                "DD-Cup",
                /*"E-Cup",
                "E-Cup",
                "F-Cup",
                "G-Cup",
                "H-Cup",
                "I-Cup",
                "J-Cup"*/
            ];
            const dickCount = [
                "One",
                /*"One",
                "Two",
                "Two",
                "Two"*/
            ];
            const dickSize = [
                /*"3ft",
                "3ft 6in",
                "4ft",
               "4ft 6in",
                "5ft"*/

                "8in",
                "1ft",
                "1ft 4in"
            ];
            const wingSize = [
                "Huge",
                "Average",
                "Small"
            ];
            const Horns = [
                "Swept-Back",
                "Curved",
                "Spiraled"
            ];
            const muzzle = [
                "Short",
                "Long",
                "Average",
            ];
            const claws = [
                "Large claws",
                "Short claws",
                "Average claws"
            ];
            const teeth = [
                "Large fangs",
                "No fangs",
                "Demonic fangs"
            ];
            const tailSize = [
                "Average",
                "Very long",
                "Short"
            ];
            const nippleColor = [
                "Dark Tan",
                "Blue"
            ];

            var pRace = race[Math.floor(Math.random() * race.length)];
            var pGender = gender[Math.floor(Math.random() * gender.length)];
            var pHeight = height[Math.floor(Math.random() * height.length)];
            var pBody = bodyColor[Math.floor(Math.random() * bodyColor.length)];
            var pEyes = eyeColor[Math.floor(Math.random() * eyeColor.length)];
            var pbreastSize = breastSize[Math.floor(Math.random() * breastSize.length)];
            var pDickNum = dickCount[Math.floor(Math.random() * dickCount.length)];
            var pDickSize = dickSize[Math.floor(Math.random() * dickSize.length)];
            var pWings = wingSize[Math.floor(Math.random() * wingSize.length)];
            var pMuzzle = muzzle[Math.floor(Math.random() * muzzle.length)];
            var pHorns = Horns[Math.floor(Math.random() * Horns.length)];
            var pNipples = nippleColor[Math.floor(Math.random() * nippleColor.length)];
            var pClaws = claws[Math.floor(Math.random() * claws.length)];
            var pTeeth = teeth[Math.floor(Math.random() * teeth.length)];
            var pTail = tailSize[Math.floor(Math.random() * tailSize.length)];

            if (pRace == 'Human') {

                const storeEmbed = new Discord.RichEmbed()
                    .setColor(client.config.economyColor)
                    .setTitle(`Child Generator`)  // Shop Name
                    .addField(`:bust_in_silhouette: Gender`, pGender, true)
                    .addField(`:person_standing: Height`, pHeight, true)
                    .addField(`:art: Body Colors`, `Caucasian`, true)
                    .addField(`:eye: Eye Color`, pEyes, true)
                    .addField(`:bikini: Nipple Colors`, pNipples, true)
                    .addField(`:postal_horn: Horns Type`, pHorns, true)
                    .addField(`:snake: Tail Size`, pTail, true)
                    .addField(`:tooth: Fang Size`, pTeeth, true)
                    .addField(`:dagger: Claw Size`, pClaws, true)
                    .setFooter(`Called by ${message.author.username}`, message.author.avatarURL)
                if (pGender == "Futanari" || pGender == "Female") {
                    storeEmbed.addField(`:heart: Breast Size`, pbreastSize, true);
                }
                if (pGender == "Futanari" || pGender == "Male") {
                    storeEmbed.addField(`:blue_heart:  Dick Size(s)`, pDickSize, true)
                }
                return message.channel.send(storeEmbed);

            } else {

                const storeEmbed = new Discord.RichEmbed()
                    .setColor(client.config.economyColor)
                    .setTitle(`Child Generator`)  // Shop Name
                    .addField(`:bust_in_silhouette: Gender`, pGender, true)
                    .addField(`:person_standing: Height`, pHeight, true)
                    .addField(`:art: Body Colors`, pBody, true)
                    .addField(`:eye: Eye Color`, pEyes, true)
                    .addField(`:bikini: Nipple Colors`, pNipples, true)
                    .addField(`:butterfly: Wing Size`, pWings, true)
                    .addField(`:part_alternation_mark: Muzzle Size`, pMuzzle, true)
                    .addField(`:postal_horn: Horns Type`, pHorns, true)
                    .addField(`:snake: Tail Size`, pTail, true)
                    .addField(`:tooth: Fang Size`, pTeeth, true)
                    .addField(`:dagger: Claw Size`, pClaws, true)
                    .setFooter(`Called by ${message.author.username}`, message.author.avatarURL)

                if (pGender == "Futanari" || pGender == "Female") {
                    storeEmbed.addField(`:heart: Breast Size`, pbreastSize, true);
                }
                if (pGender == "Futanari" || pGender == "Male") {
                    //storeEmbed.addField(`:yellow_heart: Dick Count`, pDickNum, true)
                    storeEmbed.addField(`:blue_heart:  Dick Size(s)`, pDickSize, true)
                }


                return message.channel.send(storeEmbed);
            }






        }
    },
};