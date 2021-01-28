module.exports = {
    name: 'drunk',
    description: 'Test for drunk people',
    execute(message) {
      message.channel.send('I cannot give you another beer if you do not succeed to answer to some questions! Take the test on https://quipoquiz.com/fr/index');
    }
};