module.exports = {
  name: "dp",
  description: "resumen deportados",
  async execute(client, message, args, Discord) {
    const deportadosModel = require("../models/deportadosShema");

    try {
      //deportadosData = await deportadosModel.find({});
      if (!deportadosData) {
        console.log("nada");
      } else {
        for (const i of deportadosData) {
          let embed = new Discord.MessageEmbed()
            .setColor("#e42643")
            .setTitle(`DEPORTADOS`)
            .addFields(
              {
                name: "Num Expediente",
                value: `${i.numExp}`,
                inline: true,
              },
              {
                name: "Num Asistencia",
                value: `${i.asistencia}`,
                inline: true,
              },
              {
                name: "Comp aerea",
                value: `${i.compAerea}`,
                inline: true,
              },
              {
                name: "Fecha Entrada",
                value: `${i.fechaEntrada}`,
                inline: true,
              },
              {
                name: "H entrada",
                value: `${i.horaEntrada}`,
                inline: true,
              },
              {
                name: "Vuelo Salida",
                value: `${i.vueloSalida}`,
                inline: true,
              },
              {
                name: "Fecha salida",
                value: `${i.fechaSalida}`,
                inline: true,
              },
              {
                name: "Hora salida",
                value: `${i.horaSalida}`,
                inline: true,
              },
              {
                name: "Hora real salida",
                value: `${i.horaRealSalida}`,
                inline: true,
              },
              {
                name: "Dia real salida",
                value: `${i.diaRealSalida}`,
                inline: true,
              },
              {
                name: "Motivo",
                value: `${i.motivo}`,
                inline: true,
              }
            );
          message.channel.send(embed);
        }
      }
      //
    } catch (error) {
      console.log(error);
    }
  },
};
