const Discord = require("discord.js");

exports.run = (client, message, args) => {


	if (args == 'mod' || args == 'Mod') {

		// Moderation Help Menu
		const helpMod = new Discord.RichEmbed()
			.setColor(client.config.helpColor)
			.addField("Kick <user>", "Kicks the mentioned user.")
			.addField("Ban <user>", "Bans the mentioned user.")
			.addField("Delete <number>", "Deletes the specified number of messages in a channel.")
			.addField("Coming Soon", "Coming Soon.")
			.addField("Blank", "Suggest a command to Renegade.")
			.setFooter("FennecBot Version: " + client.config.botversion);

		return message.channel.send(helpMod);

	} else if (args == 'fun' || args == 'Fun') {

		// Fun Help Menu
		const helpFun = new Discord.RichEmbed()
			.setColor(client.config.helpColor)
			.addField("FennecBot Prefix:", client.config.prefix)
			.addField("8Ball <question>", "Calls upon the Fennec Gods to answer questions.")
			.addField("Advice", "Gives you some 'helpful' advice.")
			.addField("BLB <name>", "Make your own Be Like Bill image.")
			.addField("Cat", "Sends a random cat.")
			.addField("CoinFlip", "Flips a coin, returns with Heads or Tails.")
			.addField("Dog", "Sends a random dog.")
			.addField("DRoll", "Rolls a dice.")
			.addField("ff", "Secret uses")
			.addField("Fox", "Sends a random Fox.")
			.addField("Love <name 1> <name 2>", "Custom-Made love calculator.")
			.addField("Number <max value>", "Gives a random number from 1 - <max value>.")
			.addField("Reddit <subreddit>", "Pulls a random image from specified subreddit.")
			.addField("Say <message>", "FennecBot mimics you. (Owner Only RN)")
			.addField("Trump", "Pulls a random trump quote.")
			.addField("YesNo <question>", "Pulls a random gif and answer to your question.")
			.addField("PP", "Measures your dick.")
			.setFooter("FennecBot Version: " + client.config.botversion);

		return message.channel.send(helpFun);

	} else if (args == 'game' || args == 'Game') {

		// Game Help Menu
		const helpGame = new Discord.RichEmbed()
			.setColor(client.config.helpColor)
			.addField("FennecBot Prefix:", client.config.prefix)
			.addField("RR", "Russian Roulette.")
			.addField("Trivia", "Currently does not work.")
			.addField("Slots", "Coming Soon.")
			.addField("RPS", "Coming Soon.")
			.addField("Cheese Touch", "Coming Soon.")
			.setFooter("FennecBot Version: " + client.config.botversion);

		return message.channel.send(helpGame);

	} else if (args == 'utility' || args == 'Utility') {

		// Utility Help Menu
		const helpUtility = new Discord.RichEmbed()
			.setColor(client.config.helpColor)
			.addField("FennecBot Prefix:", client.config.prefix)
			.addField("ServerInfo", "Shows info about the server.")
			.addField("BotInfo", "Shows info about the server.")
			.addField("BotInvite", "Sends an Invite URL for FennecBot in your DM.")
			.addField("Ping", "Responds with Bot and API latency.")
			.addField("Blank", "Suggest a command to Renegade.")
			.setFooter("FennecBot Version: " + client.config.botversion);

		return message.channel.send(helpUtility);

	} else if (args == 'action' || args == 'Action') {

		// Action Help Menu
		const helpAction = new Discord.RichEmbed()
			.setColor(client.config.helpColor)
			.addField("FennecBot Prefix:", client.config.prefix)
			.addField("Hug <user>", "Hugs the mentioned user.")
			.addField("Kiss <user>", "Kisses the mentioned user.")
			.addField("Slap <user>", "Slaps the mentioned user.")
			.addField("Pat <user>", "Pats the mentioned user.")
			.addField("Marry <user>", "Propose to the mentioned user.")
			.setFooter("FennecBot Version: " + client.config.botversion);

		return message.channel.send(helpAction);

	} else if (args == 'nsfw' || args == 'NSFW') {

		// NSFW Help Menu
		const helpNSFW = new Discord.RichEmbed()
			.setColor(client.config.helpColor)
			.addField("FennecBot Prefix:", client.config.prefix)
			.addField("Ahegao", "Sends a random Ahegao image.")
			.addField("E621 <tags>", "Searches for a random image from e621 with your tags.")
			.addField("Hentai", "Sends a random Hentai image.")
			.addField("NGif", "Sends a random NSFW Gif.")
			.addField("NSFW", "Sends a random NSFW image.")
			.addField("R34 <tags>", "Searches for a random image from rule34 with your tags.")
			.addField("Yiff", "Sends a random Yiff image")
			.setFooter("FennecBot Version: " + client.config.botversion);

		return message.channel.send(helpNSFW);

	} else if (args == 'misc' || args == 'Misc') {

		// Misc Help Menu
		const helpMisc = new Discord.RichEmbed()
			.setColor(client.config.helpColor)
			.addField("FennecBot Prefix:", client.config.prefix)
			.addField("Profile", "Sends your profile embed.")
			.addField("Level", "Sends your level and points.")
			.addField("Timezone <timezone abbr>", "Change your timezone.")
			.addField("Birthday <birthday: 00-00>", "Change your birthday.")
			.setFooter("FennecBot Version: " + client.config.botversion);

		return message.channel.send(helpMisc);

	} else if (args == 'all' || args == 'All') {

		return message.channel.send("https://docs.google.com/document/d/14WMPUhiKSElnHAK0vYYlvNIgGHk28dNHbZ-JGJAnDQo/edit?usp=sharing  --  Incomplete list of all commands.")

	} else {

           // Main Help Menu
      const helpMain = new Discord.RichEmbed()
            .setColor(client.config.helpColor)
            .addField("FennecBot Prefix:", client.config.prefix)
            .addField("Help Mod", "Displays the moderation commands.")
            .addField("Help Fun", "Displays the fun commands.")
            .addField("Help Game", "Displays the game commands.")
            .addField("Help Utility", "Displays the utility commands.")
            .addField("Help Action", "Displays the action commands.")
			.addField("Help NSFW", "Displays the nsfw commands.")
			.addField("Help Misc", "Displays the misc commands.")
			.addField("Help All", "Shows all of the commands.")
            .setFooter("FennecBot Version: " + client.config.botversion);

        return message.channel.send(helpMain);
    }
   


};

