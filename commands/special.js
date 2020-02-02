const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const booru = require('booru');
const { Helpers } = require('../assets/json/config.json')

const sreddits = [
    "Hyiff",
    "yiff",
    "fyiff",
    "FeralYiff",
    "yiffgif"
]


exports.run = (client, message, args) => {

    var user = message.author.id

    // Checks for the special ids
	if (Helpers.includes(message.author.id) == true) {
		// YIFF
		if (args == "yiff") {


			// For loop sends the command 5 times
			for (var i = 0; i < 10; ++i) {
				function yiff() {
					var ranSub = sreddits[Math.floor(Math.random() * sreddits.length)];

					randomPuppy(ranSub)
						.then(url => {
							const dogEmbed = new Discord.RichEmbed()
								.setAuthor("Yiff Subreddit(s)")
								.setImage(url)
								.setColor(client.config.naughtyColor)
								.setFooter("FennecBot Version: " + client.config.botversion);
							return message.channel.send(dogEmbed);
						})
				}

				setTimeout(yiff, 1500);



			}

			// BUTTS
		} else if (args == "butts") {


			for (var i = 0; i < 5; ++i) {

				function butts() {
					booru.search('e621', ['big_butt score:>100 female solo'], { limit: 1, random: true })
						.then(booru.commonfy)
						.then(images => {
							for (let image of images) {
								// Embed for the image
								const naughtyEmbed = new Discord.RichEmbed()
									.setAuthor(`E621 | Big Female Butts~`)
									.setImage(image.common.file_url)
									.setColor(client.config.naughtyColor)
									.setFooter("FennecBot Version: " + client.config.botversion);
								return message.channel.send(naughtyEmbed);

							}
						})
				}
				setTimeout(butts, 1500);
			}

			// TITS
		} else if (args == 'tits') {


			for (var i = 0; i < 5; ++i) {
				function tits() {
					booru.search('e621', ['big_breasts score:>100 female solo'], { limit: 1, random: true })
						.then(booru.commonfy)
						.then(images => {
							for (let image of images) {
								// Embed for the image
								const naughtyEmbed = new Discord.RichEmbed()
									.setAuthor(`E621 | Big Female Breasts~`)
									.setImage(image.common.file_url)
									.setColor(client.config.naughtyColor)
									.setFooter("FennecBot Version: " + client.config.botversion);
								return message.channel.send(naughtyEmbed);
							}
						})
				}
				setTimeout(tits, 1500);
			}



			//BOTH NORMAL
		} else if (args == 'both') {


			for (var i = 0; i < 5; ++i) {
				function both() {
					booru.search('e621', ['big_breasts big_butt score:>100 big_penis big_balls'], { limit: 1, random: true })
						.then(booru.commonfy)
						.then(images => {
							for (let image of images) {
								// Embed for the image
								const naughtyEmbed = new Discord.RichEmbed()
									.setAuthor(`E621 | Big Breasts, Butts, Balls, and Cocks~`)
									.setImage(image.common.file_url)
									.setColor(client.config.naughtyColor)
									.setFooter("FennecBot Version: " + client.config.botversion);
								return message.channel.send(naughtyEmbed);
							}
						})
				}
				setTimeout(both, 1500);
			}

			// HUGE FEMALE
		} else if (args == 'hugef') {


			for (var i = 0; i < 5; ++i) {
				function hugef() {
					booru.search('e621', ['huge_breasts huge_butt score:>130 female solo'], { limit: 1, random: true })
						.then(booru.commonfy)
						.then(images => {
							for (let image of images) {
								// Embed for the image
								const naughtyEmbed = new Discord.RichEmbed()
									.setAuthor(`E621 | Huge Female Breasts and Butts~`)
									.setImage(image.common.file_url)
									.setColor(client.config.naughtyColor)
									.setFooter("FennecBot Version: " + client.config.botversion);
								return message.channel.send(naughtyEmbed);
							}
						})
				}
				setTimeout(hugef, 1500);
			}

			// HUGE MALE
		} else if (args == 'hugem') {


			for (var i = 0; i < 5; ++i) {
				function hugem() {
					booru.search('e621', ['huge_balls huge_penis score:>80 male solo'], { limit: 1, random: true })
						.then(booru.commonfy)
						.then(images => {
							for (let image of images) {
								// Embed for the image
								const naughtyEmbed = new Discord.RichEmbed()
									.setAuthor(`E621 | Huge Male Balls and Cocks~`)
									.setImage(image.common.file_url)
									.setColor(client.config.naughtyColor)
									.setFooter("FennecBot Version: " + client.config.botversion);
								return message.channel.send(naughtyEmbed);
							}
						})
				}
				setTimeout(hugem, 1500);
			}

			// BOTH HUGE
		} else if (args == 'hboth') {


			for (var i = 0; i < 5; ++i) {
				function hboth() {
					booru.search('e621', ['big_balls huge_penis score:>25 big_breasts big_butt'], { limit: 1, random: true })
						.then(booru.commonfy)
						.then(images => {
							for (let image of images) {
								// Embed for the image
								const naughtyEmbed = new Discord.RichEmbed()
									.setAuthor(`E621 | Huge Cocks/Balls/Breasts/Butts`)
									.setImage(image.common.file_url)
									.setColor(client.config.naughtyColor)
									.setFooter("FennecBot Version: " + client.config.botversion);
								return message.channel.send(naughtyEmbed);
							}
						})
				}
				setTimeout(hboth, 1500);
			}

		} else if (args == 'help') {

			const specialHelp = new Discord.RichEmbed()
				.setAuthor(`Help for the special commands`)
				.addField("yiff", "Sends 5 images from the yiff subreddit(s).")
				.addField("butts", "Sends 5 images of big female butts.")
				.addField("tits", "Sends 5 images of big female breasts.")
				.addField("both", "Sends 5 images of big female breasts and butts.")
				.addField("hugef", "Sends 5 images of huge female breasts and butts.")
				.addField("hugem", "Sends 5 images of huge male cocks and balls")
				.addField("hboth", "Sends 5 images of huge males and females.")
				.setColor(client.config.naughtyColor)
				.setFooter("FennecBot Version: " + client.config.botversion);
			return message.channel.send(specialHelp);

		} else if (args == 'dump') {


			for (var i = 0; i < 25; ++i) {
				function both() {
					booru.search('e621', ['big_breasts big_butt score:>100 big_penis big_balls'], { limit: 1, random: true })
						.then(booru.commonfy)
						.then(images => {
							for (let image of images) {
								// Embed for the image
								const naughtyEmbed = new Discord.RichEmbed()
									.setAuthor(`E621 | Big Breasts, Butts, Balls, and Cocks~`)
									.setImage(image.common.file_url)
									.setColor(client.config.naughtyColor)
									.setFooter("FennecBot Version: " + client.config.botversion);
								return message.channel.send(naughtyEmbed);
							}
						})
				}


				setTimeout(both, 1500);
			}
			for (var i = 0; i < 25; ++i) {
				function yiff() {
					var ranSub = sreddits[Math.floor(Math.random() * sreddits.length)];

					randomPuppy(ranSub)
						.then(url => {
							const dogEmbed = new Discord.RichEmbed()
								.setAuthor("Yiff Subreddit(s)")
								.setImage(url)
								.setColor(client.config.naughtyColor)
								.setFooter("FennecBot Version: " + client.config.botversion);
							return message.channel.send(dogEmbed);
						})
				}

				setTimeout(yiff, 1500);



			}




		} else if (args == 'snowy') {


			for (var i = 0; i < 10; ++i) {
				function snowy() {
					booru.search('e621', ['huge_butt thick_thighs score:>40 big_breasts'], { limit: 1, random: true })
						.then(booru.commonfy)
						.then(images => {
							for (let image of images) {
								// Embed for the image
								const naughtyEmbed = new Discord.RichEmbed()
									.setAuthor(`E621 | Snowy's Stuff`)
									.setImage(image.common.file_url)
									.setColor(client.config.naughtyColor)
								return message.channel.send(naughtyEmbed);
							}
						})
				}
				setTimeout(snowy, 1500);
			}

		} else {
			return
		}

	} else {
		return
	}
};