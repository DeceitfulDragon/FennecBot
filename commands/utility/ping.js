module.exports = {
    name: 'ping',
    description: 'Detect the latency of the bot.',
    aliases: ['pong'],
    usage: '//ping',
    cooldown: 3,
    async execute(client, message, args) {

        const m = await message.channel.send("Calculating");

        m.edit(`Latency is **${m.createdTimestamp - message.createdTimestamp}ms**. API Latency is **${Math.round(client.ping)}ms**`);
    },
};