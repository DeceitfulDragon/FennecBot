const Discord = require("discord.js");

module.exports = {
    name: 'profile',
    description: 'Take a look at your profile',
    usage: '//profile',
    cooldown: 2,
    execute(client, message, args, sql) {

        client.getDick = sql.prepare("SELECT * FROM sizes WHERE id = ?");
        Dick = client.getDick.get(message.author.id);

        client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
        client.setProfile = sql.prepare("INSERT OR REPLACE INTO profile (id, user, zone, birth, gender, dwins, marry) VALUES (@id, @user, @zone, @birth, @gender, @dwins, @marry);");
        Profile = client.getProfile.get(message.author.id);

        client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
        Eco = client.getEco.get(message.author.id);

        if (!Profile) {
            Profile = {
                id: message.author.id, user: message.author.username, zone: "not set", birth: "not set", gender: "not set", dwins: 0, marry: "Nobody"
            }
        }
        client.setProfile.run(Profile);


        if (!Eco) {

            var total = "//account"

        } else {

            var total = Eco.cash + Eco.bank;
        }

        const profileEmbed = new Discord.RichEmbed()
            .setColor(client.config.economyColor)
            .setTitle(`:globe_with_meridians: ${message.author.username}'s Profile.`)
            .setThumbnail(message.author.avatarURL)
            .addField(`:dollar: Money:`, `Total: $${total}`, true)
            .addField(`:alarm_clock:  TimeZone:`, `${Profile.zone}`, true)
            .addField(`:spy: Gender:`, `${Profile.gender}`, true)
            .addField(`:medal:  Deathmatch Wins:`, `-- ${Profile.dwins} --`, true)

        if (!Dick) {
            profileEmbed.addField(`:eggplant:  Dick Size:`, `//pp`, true)
        } else {
            profileEmbed.addField(`:eggplant:  Dick Size:`, `${Dick.size} inches`, true)
        }

        profileEmbed.addField(`:gift: Birthday:`, `${Profile.birth}`, true)

        if (Profile.marry != "Nobody") {
            profileEmbed.addField(`:sparkling_heart: Married to:`, `<@${Profile.marry}>`, true)
        } else {
            profileEmbed.addField(`:sparkling_heart: Married to:`, `Nobody`, true)
        }

        profileEmbed.addField(`:handbag: Items:`, `NULL`, true)
        profileEmbed.addField(`:handbag: nothing:`, `NULL`, true);


        return message.channel.send(profileEmbed);
    },
};