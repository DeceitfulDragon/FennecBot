const { Attachment } = require("discord.js");
const fetch = require("node-fetch");
const { createCanvas, loadImage, registerFont } = require('canvas');
const imageUrlRegex = /\?size=2048$/g;
const { Canvas } = require("canvas-constructor");
const pLoader = require("../../assets/profile/ploader.js");
module.exports = {
    name: 'profile',
    description: 'Take a look at your profile',
    usage: '//profile',
    cooldown: 2,
  async execute(client, message, args, sql) {

      var member = message.author;

        client.getProfile = sql.prepare("SELECT * FROM profile WHERE id = ?");
        client.setProfile = sql.prepare("INSERT OR REPLACE INTO profile (id, user, zone, birth, gender, marry, bio) VALUES (@id, @user, @zone, @birth, @gender, @marry, @bio);");
        Profile = client.getProfile.get(message.author.id);

        client.getCustom = sql.prepare("SELECT * FROM custom WHERE id = ?");
        client.setCustom = sql.prepare("INSERT OR REPLACE INTO custom (id, user, profile, text, background) VALUES (@id, @user, @profile, @text, @background);");
        Custom = client.getCustom.get(message.author.id);

      if (!Profile) {
          Profile = {
                id: message.author.id, user: message.author.username, zone: "not set", birth: "not set", gender: "not set", marry: "Nobody", bio: "//bio"
          }
      }
      client.setProfile.run(Profile);

      if (!Custom) {
          Custom = {
              id: message.author.id, user: message.author.username, profile: "default", text: 1, background: "#23272A"
          }
      }
     client.setCustom.run(Custom);

   

      const sProfile = new pLoader(member, Custom.profile, sql, client, message.channel)

    },
};