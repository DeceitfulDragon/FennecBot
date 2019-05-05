
const min = 1
exports.run = (client, message) => {

    var content = message.content
    var parts = content.split(" ");
    var max = parts[1]

    if (max < 2) {
        message.channel.send("Please pick a number greater than 1.")
    } else {
        var numResult = Math.floor(Math.random() * (max - min + 1)) + min;
		return message.channel.send(numResult);
    }
};