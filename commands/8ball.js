const { eBall } = require('../assets/json/8ball.json')

exports.run = (client, message) => {

    const bAnswer = eBall[Math.floor(Math.random() * eBall.length)];

     
	message.channel.send(`**The Gods say:** ${bAnswer}`)
};
