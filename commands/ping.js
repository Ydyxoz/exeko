module.exports = {
  name: `${prefix} Beer`,
  description: 'Sert une bière',
  execute(message) {
    message.channel.send('Hello dear friend, what can I do for you?')
  }
};
