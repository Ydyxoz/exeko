module.exports = {
    name: 'server',
    description: 'Server information',
    execute(message) {
      message.channel.send(`You are : ${message.guild.name}\n The number of people is : ${message.guild.memberCount}`);
    }
  };