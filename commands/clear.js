//const { execute } = require("./reactionDay");

module.exports = {
  name: "clear",
  description: "Eliminar mensajes!",
  async execute(client, message, args) {
    if (!args[0])
      return message.reply("Por favor pon un numero de mensajes a borrar!");
    if (isNaN(args[0])) return message.reply("por favor escribe un numero!");

    if (args[0] > 100)
      return message.reply("No puedes borrar mas de 100 mensajes!");
    if (args[0] < 1) return message.reply("debes borrar al menos un mensaje!");

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};
