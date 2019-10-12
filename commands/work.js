const { work } = require("../json/eco.json")
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');
const moneyTimer = new Set();

const minO = 1;
const maxO = 10;
const min = 100;
const max = 130;
exports.run = (client, message) => {

	client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
	client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");
	Eco = client.getEco.get(message.author.id);

	var overTime = Math.floor(Math.random() * (maxO - minO + 1)) + minO;
	var money = Math.floor(Math.random() * (max - min + 1)) + min;
	var nWork = work[Math.floor(Math.random() * work.length)];

	if (!Eco) {

		return message.reply(`You don't have an bank account setup! Do ${client.config.prefix}money and then come back to this command.`);	

	} else {

		
		if (!moneyTimer.has(message.author.id)) {

			if (overTime > 5) { // If overTime is greater than 5 on the generator, then the overtime bonus is added

				var oMoney = Math.floor(Math.random() * (maxO - minO + 1)) + minO;	// OVERTIME MONEY GEN

				var tMoney = oMoney + money;

				Eco.cash += tMoney;
	
				client.setEco.run(Eco);
	
				moneyTimer.add(message.author.id);
				setTimeout(() => {
					moneyTimer.delete(message.author.id);
				}, 600000);
	
				return message.reply(`You did some overtime at your dead-end office job! +**$${tMoney}** added to your wallet`);

		} else {

			
				Eco.cash += money;
	
				client.setEco.run(Eco);
	
				moneyTimer.add(message.author.id);
				setTimeout(() => {
					moneyTimer.delete(message.author.id);
				}, 600000);
	
				return message.reply(`${nWork} +**$${money}** added to your wallet`);

		}



		} else {

			return message.reply(`Sorry Mr.HardWorker, you need a take a break before doing that again! (Timeout is 10 minutes total)`);

		}

	}


};