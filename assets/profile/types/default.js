const fetch = require("node-fetch");
const imageUrlRegex = /\?size=2048$/g;
const { Attachment } = require('discord.js');
const { createCanvas, loadImage, registerFont } = require('canvas');

module.exports = {
    name: 'default',
    async execute(member, sql, client, channel) {

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

            async function profile() {

                try {

                    channel.startTyping();

                    function shortenText(ctx, text, maxWidth) {
                        let shorten = false;
                        while (ctx.measureText(text).width > maxWidth) {
                            if (!shorten) shorten = true;
                            text = text.substr(0, text.length - 1);
                        }
                        return shorten ? `${text}...` : text;
                    }

                    const result = await fetch(member.displayAvatarURL.replace(imageUrlRegex, "?size=512"));
                    if (!result.ok) console.log("Failed to get the avatar.");
                    const avatar = await result.buffer();

                    var auth = await client.fetchUser(member.id);
                    var name = auth.username;

                    const avatarImage = await loadImage(avatar)

                    const discordImage = await loadImage('assets/images/Discord2.png')


                    const canvas = createCanvas(800, 315)
                    const ctx = canvas.getContext('2d')


                    const headerFont = '30px Keep Calm Med';
                    const profileFont = '24px Lemon Milk';
                    const white = '#FFFFFF';
                    const dBlue = '#7289DA';

                    // Background
                    ctx.fillStyle = '#23272A';
                    ctx.fillRect(0, 0, 800, 315)

                    // Name
                    ctx.font = '38px Uni Sans Heavy CAPS'
                    ctx.fillStyle = white;
                    ctx.fillText(name, 10, 50)
                    ctx.fillStyle = white
                    ctx.fillRect(10, 58, 590, 5)
                    ctx.drawImage(discordImage, 572, 16, 45, 45)

                    // Money
                    ctx.font = headerFont
                    ctx.fillStyle = white;
                    ctx.fillText(`Cash:`, 45, 100)
                    ctx.fillText(`Bank:`, 335, 100)
                    ctx.fillStyle = '#d4d4d4';
                    ctx.font = profileFont
                    ctx.fillText(shortenText(ctx, `$${cash}`, 120), 135, 100)
                    ctx.fillText(shortenText(ctx, `$${bank}`, 140), 425, 100)

                    ctx.fillStyle = dBlue;
                    ctx.beginPath()
                    ctx.arc(29, 88, 12, 0, Math.PI * 2)
                    ctx.fill()

                    ctx.fillStyle = dBlue;
                    ctx.beginPath()
                    ctx.arc(320, 88, 12, 0, Math.PI * 2)
                    ctx.fill()

                    // Gender / Birthday
                    ctx.font = headerFont
                    ctx.fillStyle = white;
                    ctx.fillText(`Gender:`, 45, 140)
                    ctx.fillText(`BDay:`, 335, 140)
                    ctx.fillStyle = '#d4d4d4';
                    ctx.font = profileFont
                    ctx.fillText(Profile.gender, 180, 140)
                    ctx.fillText(Profile.birth, 430, 140)

                    ctx.fillStyle = dBlue;
                    ctx.beginPath()
                    ctx.arc(29, 128, 12, 0, Math.PI * 2)
                    ctx.fill()

                    ctx.fillStyle = dBlue;
                    ctx.beginPath()
                    ctx.arc(320, 128, 12, 0, Math.PI * 2)
                    ctx.fill()


                    // TZ / DICK
                    ctx.font = headerFont
                    ctx.fillStyle = white;
                    ctx.fillText(`Dick Size:`, 45, 180)
                    ctx.fillText(`Time Zone:`, 335, 180)
                    ctx.fillStyle = '#d4d4d4';
                    ctx.font = profileFont
                    ctx.fillText(`${dick} in.`, 200, 180)
                    ctx.fillText(Profile.zone, 520, 180)

                    ctx.fillStyle = dBlue;
                    ctx.beginPath()
                    ctx.arc(29, 168, 12, 0, Math.PI * 2)
                    ctx.fill()

                    ctx.fillStyle = dBlue;
                    ctx.beginPath()
                    ctx.arc(320, 168, 12, 0, Math.PI * 2)
                    ctx.fill()

                    // MARRY STATUS
                    ctx.font = headerFont
                    ctx.fillStyle = white;
                    ctx.fillText(`Married To:`, 45, 220)
                    ctx.fillStyle = '#d4d4d4';
                    ctx.font = profileFont
                    ctx.fillText(marry, 230, 220)

                    ctx.fillStyle = dBlue;
                    ctx.beginPath()
                    ctx.arc(29, 208, 12, 0, Math.PI * 2)
                    ctx.fill()

                    // BIO
                    ctx.fillStyle = white;
                    ctx.fillRect(10, 240, 775, 60)
                    ctx.font = headerFont
                    ctx.fillStyle = dBlue;
                    ctx.fillText(`Bio:`, 20, 280)
                    ctx.font = profileFont
                    ctx.fillStyle = '#000000';
                    ctx.fillText(shortenText(ctx, Profile.bio, 680), 85, 280)

                    var author = await client.fetchUser(member.id);
                    var authTag = author.discriminator;

                    // Discord Avatar
                    ctx.fillStyle = white;
                    ctx.fillRect(615, 20, 170, 170)
                    ctx.drawImage(avatarImage, 620, 25, 160, 160)
                    ctx.fillStyle = white;
                    ctx.fillRect(615, 190, 170, 40)
                    ctx.fillStyle = '#23272A';
                    ctx.font = profileFont
                    ctx.fillText(`#${authTag}`, 655, 215)


                    const bug = canvas.toBuffer();

                    return bug;

                } catch (error) {
                    await channel.send(`Something happened: ${error}`);
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