module.exports = {
    name: 'purge',
    description: 'Delete messages',
    execute(message, args) {
      const amount = parseInt(args[0]) + 1;

      if (isNaN(amount)) {
        return message.reply("It is not a valid number!");
      }
      else if (amount <= 1 || amount > 101) {
        return message.reply("It is not a valid number!");
      }

      message.channel.bulkDelete(amount)
           .then(message => console.log(`${message.size - 1} deleted messages`))
    }
  };