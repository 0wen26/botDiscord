module.exports = {
  name: "deltadaily",
  description: "resumen dia delta",
  async execute(client, message, args, Discord) {
    const deltaModel = require("../models/deltaShema");
    if (!args[0]) {
      return message.reply("Debes escribir una fecha");
    }
    try {
      deltaData = await deltaModel.find({
        fecha: `${args[0]}`,
      });
      if (deltaData.length === 0) {
        return message.reply("No se ha encontrado nada con la fecha indicada");
      } else {
        for (const i of deltaData) {
          let embed = new Discord.MessageEmbed()
            .setColor("#e42643")
            .setTitle(`Daily Delta día ${i.fecha}`)
            .addFields(
              {
                name: "Team Leader",
                value: `${i.TL}`,
                inline: true,
              },
              {
                name: "Num Vuelo",
                value: `${i.numVuelo}`,
                inline: true,
              },
              {
                name: "Catering 1",
                value: `${i.catering_1}`,
                inline: true,
              },
              {
                name: "Catering 2",
                value: `${i.catering_2}`,
                inline: true,
              },
              {
                name: "Patio 1",
                value: `${i.patio_1}`,
                inline: true,
              },
              {
                name: "Patio_2",
                value: `${i.patio_2}`,
                inline: true,
              },
              {
                name: "Frontdoor",
                value: `${i.FD}`,
                inline: true,
              },
              {
                name: "Backdoor",
                value: `${i.BD}`,
                inline: true,
              },
              {
                name: "Rampa",
                value: `${i.R}`,
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
