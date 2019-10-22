const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const timeout = 1200000; // 20 minutes
const talkedRecently = new Set();

const max = 130;
const min = 50;

const cmax = 10;
const cmin = 0;

const emax = 70;
const emin = 30;

exports.run = (client, message, args) => {

	// Getting SQL Stuff

	client.getDick = sql.prepare("SELECT * FROM sizes WHERE id = ?");
	Dick = client.getDick.get(message.author.id);

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
	Eco = client.getEco.get(message.author.id);

	client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
	Profile = client.getProfile.get(message.author.id);



	var money = Math.floor(Math.random() * (max - min + 1)) + min;	// Random Money Gen (50 - 130)

	var eMoney = Math.floor(Math.random() * (emax - emin + 1)) + emin; // Extra Money

	var chance = Math.floor(Math.random() * (cmax - cmin + 1)) + cmin; // Chance

if (!Profile || !Dick) {
	
	return message.reply("Couldn't find your profile! Please go do //profile and come back to this command!");
	
} else {

	if (!Eco) {

		return message.reply(`You don't have an Eco account setup! Do //money and then come back to this command.`);

	} else {

		if (!talkedRecently.has(message.author.id)) {

			if (Profile.gender == 'Male') {

				//			GENDER = MALE

				if (Dick.size > 10) {

					if (chance > 8) {				// Male Big Dick + $200

						var money = 200;

						Eco.cash += money;
						Eco.cash += eMoney;

						client.setEco.run(Eco);


						talkedRecently.add(message.author.id);
						setTimeout(() => {
							talkedRecently.delete(message.author.id);
						}, timeout);

						return message.reply(`A group of girls decided to pick you up off the street and you earned **$200**! With your sizeable dick, you made an extra **$${eMoney}**!`);

					} else {

						Eco.cash += money;
						Eco.cash += eMoney;

						client.setEco.run(Eco);


						talkedRecently.add(message.author.id);
						setTimeout(() => {
							talkedRecently.delete(message.author.id);
						}, timeout);

						return message.reply(`You whored yourself out on the street and made **$${money}**! With your sizeable dick, you made an extra **$${eMoney}**! `);

					}

				} else {

					if (chance > 8) {		// Male $200

						var money = 200;

						Eco.cash += money;

						client.setEco.run(Eco);


						talkedRecently.add(message.author.id);
						setTimeout(() => {
							talkedRecently.delete(message.author.id);
						}, timeout);

						return message.reply(`You whored yourself out on the street and made **$200**!`);

					} else {		// Male Regular

						Eco.cash += money;

						client.setEco.run(Eco);


						talkedRecently.add(message.author.id);
						setTimeout(() => {
							talkedRecently.delete(message.author.id);
						}, timeout);

						return message.reply(`You whored yourself out on the street and made **$${money}**!`);

					}

				}



			} else if (Profile.gender == 'Female') {

				if (chance > 5) {		// Female $200

					var money = 200;

					Eco.cash += money;

					client.setEco.run(Eco);


					talkedRecently.add(message.author.id);
					setTimeout(() => {
						talkedRecently.delete(message.author.id);
					}, timeout);

					return message.reply(`A group of guys decided to pick you up off the street and you earned **$200**!`);

				} else {	// Female Regular

					Eco.cash += money;

					client.setEco.run(Eco);


					talkedRecently.add(message.author.id);
					setTimeout(() => {
						talkedRecently.delete(message.author.id);
					}, timeout);

					return message.reply(`You whored yourself out on the street and made **$${money}**!`);

				}

			} else if (Profile.gender == 'Fox') {

				Eco.cash += money;

				client.setEco.run(Eco);


				talkedRecently.add(message.author.id);
				setTimeout(() => {
					talkedRecently.delete(message.author.id);
				}, timeout);

				return message.reply(`You sold cookies on the street and made **$${money}**!`);

			} else {

				return message.reply(`Please set your gender with //gender <gender>`);
			}

		} else {

			return message.reply("Sorry bucko, you're still recovering and resting from the last time you did that! (Timeout = 20 minutes)");

		}
	}
}


};