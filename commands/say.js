require('dotenv').config()

exports.run = (client, message, args) => {
    // Ties the message together
    sMessage = args.join(" ")

    // If statement: Tells FennecBot to only listen to the owner. (Renegay)
    if (message.author.id == process.env.BOT_OWNER) {
        message.delete()
        message.channel.send(sMessage)
    } else {
        // If it's not the owner: send this message
        message.channel.send("You're not the boss of me! :rage:")
    }

};