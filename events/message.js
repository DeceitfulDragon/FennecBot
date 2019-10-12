//const SQLite = require("better-sqlite3");
//const sql = new SQLite('./main.sqlite');
//const talkedRecently = new Set();

module.exports = (client, message) => {


    //client.getSettings = sql.prepare("SELECT * FROM settings WHERE guildid = ?");
    //client.setSettings = sql.prepare("INSERT OR REPLACE INTO settings (guildid, guildname, nsfw, economy, music, prefix) VALUES (@guildid, @guildname, @nsfw, @economy, @music, @prefix);");
    //Settings = client.getSettings.get(message.guild.id);
 /*( if (talkedRecently.has(message.author.id))
  return;

// Adds the user to the set so that they can't talk for 2.5 seconds
talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after 2.5 seconds
  talkedRecently.delete(message.author.id);
}, 2500);*/
  
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(Settings.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};