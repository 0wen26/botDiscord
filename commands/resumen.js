module.exports = {
  name: "resumen",
  description: "resumen daily",
  async execute(client, message, args) {
    const profileModel = require("../models/profileSchema");
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const messageID =
      message.guild.members.cache.get("841815763950108713").lastMessageID;

    const fechaActual = `${dia}/${mes}/${año}`;
    try {
      profileData = await profileModel.find({
        //icono: "<:WEW:841838835964182588>",
        messageID: messageID,
        fecha: fechaActual,
      });

      if (!profileData) {
        console.log("nada");
      } else {
        for (const i of profileData) {
          message.channel.send(`${i.apodo} trabaja ${i.icono} ${i.trabajo}`);
        }
      }
      //
    } catch (error) {
      console.log(err);
    }
  },
};
