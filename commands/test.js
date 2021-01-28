module.exports = {
    name: 'test',
    description: 'Test to see if you are drunk',
    execute(message, args) {
      const amount = parseInt(args[0]);

      if (amount <= 0 || amount < 3 ) {
        return message.reply("Hmm I think you may be too drunk to take another beer. Do you want to order something to eat?🍔🍟");
      }
      else if (amount <= 3 || amount < 6) {
        return message.reply("Let's give you a beer for your effort my friend!🍺");
      }
    }
  };