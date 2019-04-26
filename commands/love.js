const Discord = require("discord.js");
var heartIco = ''

var stateM = '';
const max = 100
const min = 1

// Statement Arrays
const uThirty = [
    "Might wanna look for someone else.",
    "This doesn't look like a good match...",
    "Who the fuck matched ya'll?"
]

const u60 = [
    "'Almost' there.",
    "Probably gonna get friend-zoned.",
    "You can always do better"
]

const uSeventy = [
    "There's definitely something here",
    "Ooooooo!",
    "*slurp slurp*"
]

exports.run = (client, message) => {

    var content = message.content
    var parts = content.split(" ");
    var nameA = parts[1]
    var nameB = parts[2]

    var numResult = Math.floor(Math.random() * (max - min + 1)) + min;
    // Under Thirty
    var uThree = uThirty[Math.floor(Math.random() * uThirty.length)];
    // Under Sixty
    var uSix = u60[Math.floor(Math.random() * u60.length)];
    // Under Seventy
    var uSeven = uSeventy[Math.floor(Math.random() * uSeventy.length)];

    // If Statements
    if (numResult < 30) {
        var stateM = uThree
        var heartIco = 'https://i.imgur.com/reeZdtL.png'
    } else if (29 < numResult && numResult < 60) {
        var stateM = uSix
        var heartIco = 'https://i.imgur.com/S60ESOS.png'
    } else if (numResult > 59) {
        var stateM = uSeven
        var heartIco = 'https://i.imgur.com/VPiVdGG.png'
    }

    const loveEmbed = new Discord.RichEmbed()
        .setColor('#FF00BB')
        .setThumbnail(heartIco)
        .setAuthor("Love Calculator | " + nameA + " & " + nameB)
        .addField("Calculation:", numResult + "%")
        .addField("Statement:", stateM)
        .setFooter("FennecBot Version: " + client.config.botversion);
    message.channel.send(loveEmbed)

};