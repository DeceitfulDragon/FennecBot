const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message, args) => {


    var giveamount = args[1];
    const money = parseInt(giveamount);


    const user = message.mentions.users.first() || client.users.get(args[0]);

    client.getEco = sql.prepare("SELECT * FROM economy WHERE id = ?");
    client.setEco = sql.prepare("INSERT OR REPLACE INTO economy (id, cash, bank, user) VALUES (@id, @cash, @bank, @user);");




    if (!user) {

        return message.reply(`please mention somebody to give money to`);

    } else {

        Giver = client.getEco.get(message.author.id);
        Reciever = client.getEco.get(user.id);

        if (!giveamount) {

            return message.reply("You can't give nothing! Please specify the amount!")

        } else {

            if (!isNaN(money) && money > 0) {

                if (Giver.cash >= money) {

                    Giver.cash -= money;
                    Reciever.cash += money;

                    client.setEco.run(Reciever);
                    client.setEco.run(Giver);

                    return message.channel.send(`${user} was just given **$${money}** by ${message.author}!`);

                } else {

                    return message.reply("HAH YOU'RE TOO POOR FOR THAT!")

                }
            } else {

                return message.reply(`Please specify a correct number.`);

            }
        }
    }
};