exports.run = (client, message, [mention, ...reason]) => {
    const perm = 'KICK_MEMBERS'

    if (!message.member.hasPermission(perm))
    return message.reply("You're not the boss of me! :rage:");

  if (message.mentions.members.size === 0)
    return message.reply("I'm a Fennec, not a mind reader! Tell me who to kick!");


  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`${member.user.tag} was succesfully kicked from the den!`);
  });
};