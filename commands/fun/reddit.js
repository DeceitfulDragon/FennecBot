const randomPuppy = require('random-puppy');

module.exports = {
    name: 'reddit',
    description: 'Grab a random image from a subreddit.',
    aliases: ['r'],
    usage: '//reddit <subreddit>',
    cooldown: 2,
    execute(client, message, args) {

        var search = args.join(" ");

        randomPuppy(search)
            .then(url => {
                return message.channel.send(url);


            }).catch(err => {

                console.log(err)
                return message.channel.send(`Nothing found for **${search}**`);

            })
    },
};