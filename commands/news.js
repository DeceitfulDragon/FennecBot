const NewsAPI = require('newsapi');
const Discord = require("discord.js");
const news = require("../json/news.json")

exports.run = (client, message, args) => {

	const newsapi = new NewsAPI(news.newsKey);

	var content = message.content;
	var parts = content.split(" ");
	const cat = parts[1];
	//const cat = lowcat.toLowerCase();

	if (!cat) {

		newsapi.v2.topHeadlines({
			language: 'en',
			category: 'general',
			pageSize: 1,
			country: 'us'
		}).then(response => {

			//var Image = response.articles.map(({ urlToImage }) => urlToImage);

			var Author = response.articles.map(({ author }) => author);
			var Title = response.articles.map(({ title }) => title);
			var Description = response.articles.map(({ description }) => description);
			var URL = response.articles.map(({ url }) => url);
			var Source = response.articles.map(({ source }) => source);
			var Site = Source.map(({ name }) => name);

			const newsEmbed = new Discord.RichEmbed()
				//.setThumbnail(Image)
				.setTitle(Title)
				.setColor(client.config.newsColor)
				.setAuthor(`${Author} on ${Site}`)
				.setDescription(`${Description} \n ${URL}`)
			return message.channel.send(newsEmbed);

		});
	} else if (cat == 'business') {


		newsapi.v2.topHeadlines({
			language: 'en',
			category: 'business',
			pageSize: 1,
			country: 'us'
		}).then(response => {

			//var Image = response.articles.map(({ urlToImage }) => urlToImage);

			var Author = response.articles.map(({ author }) => author);
			var Title = response.articles.map(({ title }) => title);
			var Description = response.articles.map(({ description }) => description);
			var URL = response.articles.map(({ url }) => url);
			var Source = response.articles.map(({ source }) => source);
			var Site = Source.map(({ name }) => name);

			const newsEmbed = new Discord.RichEmbed()
				//.setThumbnail(Image)
				.setTitle(Title)
				.setColor(client.config.newsColor)
				.setAuthor(`${Author} on ${Site}`)
				.setDescription(`${Description} \n ${URL}`)
			return message.channel.send(newsEmbed);

		});

	} else if (cat == 'technology') {


		newsapi.v2.topHeadlines({
			language: 'en',
			category: 'technology',
			pageSize: 1,
			country: 'us'
		}).then(response => {

			//var Image = response.articles.map(({ urlToImage }) => urlToImage);

			var Author = response.articles.map(({ author }) => author);
			var Title = response.articles.map(({ title }) => title);
			var Description = response.articles.map(({ description }) => description);
			var URL = response.articles.map(({ url }) => url);
			var Source = response.articles.map(({ source }) => source);
			var Site = Source.map(({ name }) => name);

			const newsEmbed = new Discord.RichEmbed()
				//.setThumbnail(Image)
				.setTitle(Title)
				.setColor(client.config.newsColor)
				.setAuthor(`${Author} on ${Site}`)
				.setDescription(`${Description} \n ${URL}`)
			return message.channel.send(newsEmbed);

		});


	} else if (cat == 'entertainment') {



		newsapi.v2.topHeadlines({
			language: 'en',
			category: 'entertainment',
			pageSize: 1,
			country: 'us'
		}).then(response => {

			//var Image = response.articles.map(({ urlToImage }) => urlToImage);

			var Author = response.articles.map(({ author }) => author);
			var Title = response.articles.map(({ title }) => title);
			var Description = response.articles.map(({ description }) => description);
			var URL = response.articles.map(({ url }) => url);
			var Source = response.articles.map(({ source }) => source);
			var Site = Source.map(({ name }) => name);

			const newsEmbed = new Discord.RichEmbed()
				//.setThumbnail(Image)
				.setTitle(Title)
				.setColor(client.config.newsColor)
				.setAuthor(`${Author} on ${Site}`)
				.setDescription(`${Description} \n ${URL}`)
			return message.channel.send(newsEmbed);

		});

	} else if (cat == 'health') {


		newsapi.v2.topHeadlines({
			language: 'en',
			category: 'health',
			pageSize: 1,
			country: 'us'
		}).then(response => {

			//var Image = response.articles.map(({ urlToImage }) => urlToImage);

			var Author = response.articles.map(({ author }) => author);
			var Title = response.articles.map(({ title }) => title);
			var Description = response.articles.map(({ description }) => description);
			var URL = response.articles.map(({ url }) => url);
			var Source = response.articles.map(({ source }) => source);
			var Site = Source.map(({ name }) => name);

			const newsEmbed = new Discord.RichEmbed()
				//.setThumbnail(Image)
				.setTitle(Title)
				.setColor(client.config.newsColor)
				.setAuthor(`${Author} on ${Site}`)
				.setDescription(`${Description} \n ${URL}`)
			return message.channel.send(newsEmbed);

		});

	} else if (cat == 'science') {


		newsapi.v2.topHeadlines({
			language: 'en',
			category: 'science',
			pageSize: 1,
			country: 'us'
		}).then(response => {

			//var Image = response.articles.map(({ urlToImage }) => urlToImage);

			var Author = response.articles.map(({ author }) => author);
			var Title = response.articles.map(({ title }) => title);
			var Description = response.articles.map(({ description }) => description);
			var URL = response.articles.map(({ url }) => url);
			var Source = response.articles.map(({ source }) => source);
			var Site = Source.map(({ name }) => name);

			const newsEmbed = new Discord.RichEmbed()
				//.setThumbnail(Image)
				.setTitle(Title)
				.setColor(client.config.newsColor)
				.setAuthor(`${Author} on ${Site}`)
				.setDescription(`${Description} \n ${URL}`)
			return message.channel.send(newsEmbed);

		});

	} else if (cat == 'sports') {


		newsapi.v2.topHeadlines({
			language: 'en',
			category: 'sports',
			pageSize: 1,
			country: 'us'
		}).then(response => {

			//var Image = response.articles.map(({ urlToImage }) => urlToImage);

			var Author = response.articles.map(({ author }) => author);
			var Title = response.articles.map(({ title }) => title);
			var Description = response.articles.map(({ description }) => description);
			var URL = response.articles.map(({ url }) => url);
			var Source = response.articles.map(({ source }) => source);
			var Site = Source.map(({ name }) => name);

			const newsEmbed = new Discord.RichEmbed()
				//.setThumbnail(Image)
				.setTitle(Title)
				.setColor(client.config.newsColor)
				.setAuthor(`${Author} on ${Site}`)
				.setDescription(`${Description} \n ${URL}`)
			return message.channel.send(newsEmbed);

		});

	} else if (cat == 'help') {

		const newsEmbed = new Discord.RichEmbed()
			.setTitle(`Available Categories:`)
			.setColor(client.config.newsColor)
			.setDescription(`Business\nEntertainment\nHealth\nScience\nSports\nTechnology\n[Don't put any category to get general news.]`)
		return message.channel.send(newsEmbed);

	}
};