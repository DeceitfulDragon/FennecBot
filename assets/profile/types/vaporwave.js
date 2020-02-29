const fetch = require("node-fetch");
const imageUrlRegex = /\?size=2048$/g;
const { Attachment } = require('discord.js');
const { Canvas } = require("canvas-constructor");

module.exports = {
    name: 'vaporwave',
    async execute(member, sql, client, channel) {

        async function profile() {

            client.getDick = sql.prepare("SELECT * FROM sizes WHERE id = ?");
            Dick = client.getDick.get(member.id);

            client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
            client.setProfile = sql.prepare("INSERT OR REPLACE INTO profile (id, user, zone, birth, gender, marry, bio) VALUES (@id, @user, @zone, @birth, @gender, @marry, @bio);");
            Profile = client.getProfile.get(member.id);

            client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
            Eco = client.getEco.get(member.id);


            if (!Eco) {

                var cash = "//account";
                var bank = "//account";

            } else {

                var cash = Eco.cash;
                var bank = Eco.bank;
            }

            if (Profile.marry != "Nobody") {
                var user = await client.fetchUser(Profile.marry);
                var marry = `${user.username}#${user.discriminator}`;
            } else {
                var marry = "Nobody";
            }

            if (!Dick) {
                var dick = "//pp";
            } else {
                var dick = Dick.size;
            }

            
            try {

                channel.startTyping();

                const headerFont = '30px Keep Calm Med';
                const headerFont2 = '28px Uni Sans Heavy CAPS';
                const profileFont = '24px Lemon Milk';
                const white = '#FFFFFF';
                const dBlue = '#7289DA';

                const result = await fetch(member.displayAvatarURL.replace(imageUrlRegex, "?size=512"));
                if (!result.ok) console.log("Failed to get the avatar.");
                const avatar = await result.buffer();

                var auth = await client.fetchUser(member.id);
                var authName = `${auth.username} #${auth.discriminator}`;

                var marryAvatar = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.color-hex.com%2Fpalettes%2F1866.png';

                if (Profile.marry != "Nobody") {

                    var res = await fetch(user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
                    if (!res.ok) console.log("Failed to get the avatar.");
                    var marryAvatar = await res.buffer();
                }

                return new Canvas(800, 400)


                    .addImage('assets/images/Vaporwave.jpg', 0, 0, 800, 400)

                    // AVATAR
                    .setColor(white)
                    .addCircle(90, 90, 80)
                    .addCircularImage(avatar, 90, 90, 75)

                    // NAME
                    .addBeveledRect(190, 50, 580, 50, 20)
                    .setTextAlign("center")
                    .setTextFont("38px Uni Sans Heavy CAPS")
                    .setColor("#000000")
                    .addResponsiveText(authName, 480, 87, 550)

                    // MARRY
                    .setColor(white)
                    .setTextFont(headerFont2)
                    .setTextAlign("left")
                    .addBeveledRect(205, 115, 550, 40, 15)
                    .setColor("#000000")
                    .addText("Married To:", 215, 145)
                    .setColor("#1F5BA3")
                    .setTextFont(profileFont)
                    .addResponsiveText(marry, 387, 145, 400)

                    // CASH / BANK
                    .setColor(white)
                    .addBeveledRect(10, 185, 220, 40, 15)
                    .addBeveledRect(10, 250, 220, 40, 15)
                    .setTextFont(headerFont2)
                    .setColor("#000000")
                    .addText("Cash:", 13, 214)
                    .addText("Bank:", 13, 280)
                    .setColor("#1F5BA3")
                    .setTextFont(profileFont)
                    .addResponsiveText(`$${cash}`, 100, 214, 100)
                    .addResponsiveText(`$${bank}`, 100, 280, 100)

                    // GENDER / BIRTHDAY
                    .setColor(white)
                    .addBeveledRect(290, 185, 220, 40, 15)
                    .addBeveledRect(290, 250, 220, 40, 15)
                    .setTextFont(headerFont2)
                    .setColor("#000000")
                    .addText("Gender:", 293, 214)
                    .addText("Birth:", 293, 280)
                    .setColor("#1F5BA3")
                    .setTextFont(profileFont)
                    .addResponsiveText(Profile.gender, 410, 214, 100)
                    .addResponsiveText(Profile.birth, 383, 280, 100)

                    // ZONE / DICK
                    .setColor(white)
                    .addBeveledRect(570, 185, 220, 40, 15)
                    .addBeveledRect(570, 250, 220, 40, 15)
                    .setTextFont(headerFont2)
                    .setColor("#000000")
                    .addText("Zone:", 573, 214)
                    .addText("Dick:", 573, 280)
                    .setColor("#1F5BA3")
                    .setTextFont(profileFont)
                    .addText(Profile.zone, 656, 214, 100)
                    .addResponsiveText(dick, 646, 280, 100)

                    // BIO
                    .setColor(white)
                    .addBeveledRect(10, 320, 780, 60, 20)
                    .setColor("#000000")
                    .setTextFont(headerFont2)
                    .addText("Bio:", 13, 360)
                    .setColor("#1F5BA3")
                    .setTextFont(profileFont)
                    .addResponsiveText(Profile.bio, 70, 360, 500)


                    .addCircularImage(marryAvatar, 730, 135, 18)

                    .toBuffer();

            } catch (error) {
                return await channel.send(`Something happened: ${error.message}`);
            }

        }
            const buffer = await profile();
            const filename = `${member.id}Profile.jpg`;
            const attachment = new Attachment(buffer, filename);
            await channel.send(attachment);

           channel.stopTyping();
            return;
        
    },
};