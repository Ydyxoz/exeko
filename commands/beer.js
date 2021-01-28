module.exports = {
  name: 'beer',
  description: 'Sert une bière',
  execute(message) {
    message.channel.send('Here is your beer traveler!🍺');
  }
};