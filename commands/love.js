const Discord = require("discord.js");
const max = 100
const min = 1
const { Score20 } = require('../json/lovecalc.json');
const { Score40 } = require('../json/lovecalc.json');
const { Score60 } = require('../json/lovecalc.json');
const { Score80 } = require('../json/lovecalc.json');
const { Score90 } = require('../json/lovecalc.json');

exports.run = (client, message) => {

    var content = message.content
    var parts = content.split(" ");
    var nameA = parts[1]
    var nameB = parts[2]

    var percentage = Math.floor(Math.random() * (max - min + 1)) + min;

	if (percentage <= 20) {

		var statement = Score20[Math.floor(Math.random() * Score20.length)];
		var heartIco = 'https://i.imgur.com/reeZdtL.png';

	} else if (20 < percentage && percentage < 40) {

		var statement = Score40[Math.floor(Math.random() * Score40.length)];
		var heartIco = 'https://i.imgur.com/reeZdtL.png';


	} else if (40 <= percentage && percentage < 60) {

		var statement = Score60[Math.floor(Math.random() * Score60.length)];
		var heartIco = 'https://i.imgur.com/S60ESOS.png';


	} else if (60 <= percentage && percentage < 80) {

		var statement = Score80[Math.floor(Math.random() * Score80.length)];
		var heartIco = 'https://i.imgur.com/S60ESOS.png';

	} else if (percentage >= 80) {

		var statement = Score90[Math.floor(Math.random() * Score90.length)];
		var heartIco = 'https://i.imgur.com/VPiVdGG.png';
	}

	const loveEmbed = new Discord.RichEmbed()
		.setColor('#FF00BB')
		.setThumbnail(heartIco)
		.setAuthor(`Love Calculator [${nameA} & ${nameB}`)
		.addField(`Calculation:`, `**${percentage}%**`)
		.addField("Statement:", statement);
	return message.channel.send(loveEmbed);

};