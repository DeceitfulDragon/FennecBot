const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message, args) => {

	var valu = args
	if (!valu) {
		const TZEmbed = new Discord.RichEmbed()
			.setTitle("Birthday")
			.setDescription(`Please put your birthday in the form of month - day. EX: 01-10 = January 10th.`)
			.setColor(client.config.economyColor);


		return message.channel.send(TZEmbed);

	} else {
		
		let data = `UPDATE profile
		SET birth = '${valu}'
		WHERE id = ${message.author.id};`


			sql.exec(data);

			return message.reply(`Success! Your Birthday has been set to ${valu}`)
	}

};