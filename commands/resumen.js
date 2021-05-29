module.exports = {
  name: "resumen",
  description: "resumen daily",
  async execute(client, message, args, Discord) {
    const profileModel = require("../models/dailySchema");
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate() + 1;
    const messageID =
      message.guild.members.cache.get("841815763950108713").lastMessageID;
    let mensaje = "";
    const fechaActual = `${dia}/${mes}/${año}`;
    try {
      profileData = await profileModel.find({
        //icono: "<:WEW:841838835964182588>",
        //messageID: messageID,
        fecha: fechaActual,
      });

      if (!profileData) {
        console.log("nada");
      } else {
        for (const i of profileData) {
          mensaje =
            mensaje + `${i.apodo} TRABAJARÁ DE ${i.trabajo} ${i.icono} \n`;
        }

        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`El ${dia}/${mes}/${año} estos son los turnos:`)
          .setDescription(mensaje);
        message.channel.send(embed);
      }
      //
    } catch (error) {
      console.log(error);
    }
  },
};
