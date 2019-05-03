const NewsAPI = require('newsapi');
const Discord = require("discord.js");
const news = require("../json/news.json")

exports.run = (client, message, args) => {

	const newsapi = new NewsAPI(news.newsKey);

	var content = message.content;
	var parts = content.split(" ");
	const str = parts[1];

	if (!str) {
		var cat = parts[1];
	} else {
		const lowcat = str.toString();
		var cat = lowcat.toLowerCase();
	}

	// IF functions to set the category for the newsAPI

	if (!cat) {

		var category = 'general';

	} else if (cat == 'business') {

		var category = 'business';

	} else if (cat == 'technology') {

		var category = 'technology';

	} else if (cat == 'entertainment') {

		var category = 'entertainment';

	} else if (cat == 'health') {

		var category = 'health';

	} else if (cat == 'science') {

		var category = 'science';

	} else if (cat == 'sports') {

		var category = 'sports';

	} else if (cat == 'help') {		// Help Embed for the categories

		const helpEmbed = new Discord.RichEmbed()
			.setTitle(`Available Categories:`)
			.setColor(client.config.newsColor)
			.setDescription(`Business\nEntertainment\nHealth\nScience\nSports\nTechnology\n[Don't put any category to get general news.]`)
		return message.channel.send(helpEmbed);

	}

	// API Time

	newsapi.v2.topHeadlines({
		language: 'en',
		category: category,
		pageSize: 1,
		country: 'us'
	}).then(response => {

		// I had to map these all out just to get Discord to recognize it all...

		var img = response.articles.map(({ urlToImage }) => urlToImage);
		var Image = img.toString();
		var Author = response.articles.map(({ author }) => author);
		var Title = response.articles.map(({ title }) => title);
		var Description = response.articles.map(({ description }) => description);
		var URL = response.articles.map(({ url }) => url);
		var Source = response.articles.map(({ source }) => source);
		var Site = Source.map(({ name }) => name);

		// finally send the news embed

		const newsEmbed = new Discord.RichEmbed()
			.setThumbnail(Image)
			.setTitle(Title)
			.setColor(client.config.newsColor)
			.setAuthor(`${Author} on ${Site}`)
			.setDescription(`${Description} \n ${URL}`)
		return message.channel.send(newsEmbed);

	});
};