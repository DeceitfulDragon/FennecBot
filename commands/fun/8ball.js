const { eBall } = require('../../assets/json/8ball.json')

module.exports = {
    name: '8ball',
    description: 'Shake the magical eight-ball and see your fate!',
    usage: '//8ball <question>',
    cooldown: 1,
    execute(message) {

        const bAnswer = eBall[Math.floor(Math.random() * eBall.length)];


        return message.reply(`**The Gods say:** ${bAnswer}`)
    },
};
