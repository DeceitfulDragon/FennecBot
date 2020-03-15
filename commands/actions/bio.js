
module.exports = {
    name: 'bio',
    description: 'Set your bio on the profile.',
    usage: '//bio <bio>',
    cooldown: 2,
    execute(client, message, args, sql) {

        client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
        client.setProfile = sql.prepare("INSERT OR REPLACE INTO profile (id, user, zone, birth, gender, marry, bio) VALUES (@id, @user, @zone, @birth, @gender, @marry, @bio);");
        Profile = client.getProfile.get(message.author.id);

        if (!Profile) {
            Profile = {
                id: message.author.id, user: message.author.username, zone: "not set", birth: "not set", gender: "not set", marry: "Nobody", bio: "//bio"
            }
        }
        client.setProfile.run(Profile);

        if (!args.length) return message.reply(`Write down what you want your biography to be!`)

        var bio = args.join(" ");

        if (bio.length > 100) return message.reply(`Your bio has too many characters! trim it down a little!`);

        var data = `UPDATE profile
		SET bio = '"${bio}"'
		WHERE id = ${message.author.id};`

        sql.exec(data);

        return message.reply(`Success! Your bio is now: "${bio}"`);
    },
};