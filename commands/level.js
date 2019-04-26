
const SQLite = require("better-sqlite3");
const sql = new SQLite('./main.sqlite');

exports.run = (client, message) => {

    client.getScore = sql.prepare("SELECT * FROM pointchart WHERE id = ?");
    score = client.getScore.get(message.author.id);

    message.reply(`You currently have **${score.points}** point(s) and are at level **${score.level}**.`)
};