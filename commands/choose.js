exports.run = (client, message, args) => {

    const wordOne = args[0];
    const wordTwo = args[1];

    var sWord = [wordOne, wordTwo];

    var selectedWord = sWord[Math.floor(Math.random() * sWord.length)];


    return message.reply(`I choose: **${selectedWord}**`);

};