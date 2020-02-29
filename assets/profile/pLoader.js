const Discord = require('discord.js');
const fs = require("fs");    

const profiles = new Discord.Collection();

fs.readdir(`./assets/profile/types/`, (err, files) => {
    if (err) throw err;

    files.forEach(f => {
        const file = require(`./types/${f}`);
        profiles.set(file.name, file);
    });
});

module.exports = class pLoader{

  constructor(user, type, sql, client, channel) {
    this.user = user;
    this.id = user.id;
    this.type = type;
    this.sql = sql;
    this.client = client;

      const selection = profiles.get(type);

      selection.execute(user, sql, client, channel);

}

};