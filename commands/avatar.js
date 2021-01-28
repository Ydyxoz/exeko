module.exports = {
    name: 'avatar',
    description: 'Profile picture',
    execute(message) {
      if (!message.mentions.users.size) {
        return message.channel.send(`Your avatar is : ${message.author.displayAvatarURL({ format : 'png' })}`);
      }

      const avatarList = message.mentions.users.map(user => {
        return `The avatar of ${user.username} is : ${user.displayAvatarURL({ format : 'png?size4096' })}`;
      });

      message.channel.send(avatarList);
    }
  };