
exports.run = (client, message, [mention, ...reason]) => {
    const perm = 'BAN_MEMBERS'

	if (!message.member.hasPermission(perm))
    return message.reply("You're not the boss of me! :rage: ");

	if (message.mentions.members.size === 0)
    return message.reply("I'm a Fennec, not a mind reader! Tell me who to ban!");


  const banMember = message.mentions.members.first();

  banMember.kick(reason.join(" ")).then(member => {
    return message.reply(`*FennecBot raises their large hammer, bold and engraved text on the side reads "BAN". FennecBot slams the hammer down onto ${member.user.tag} and destroys the heretic in one swing*`);
  });
};