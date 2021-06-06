module.exports = {
    name: "help_add_dp",
    description: "Ayuda comando añadir deportados",
  
    async execute(client, message, args, Discord) {
      try {
        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`AYUDA COMANDO DE AÑADIR DEPORTADOS`)
          .addFields(
            {
                name: "comando: add_dp",
                value: `Este comando sirve para añadir un deportado a una base de datos para poder consultarlo mas tarde:\n        
                EL ORDEN ES IMPORTANTE\n`,
                inline: false,
              },
              {
                name: "Este es el orden del comando:",
                value: `numero expediente, numero asistencia, compañia aerea, fecha entrada, hora entrada, vuelo salida, fecha salida, hora salida, hora real salida, dia real saldia, motivo salida\n
                        Cada campo esta separado por un espacio si hay un nombre compuesto poner _`,
                inline: false,
              },
              
              {
                name: "si hay un nombre compuesto poner _",
                value: `add_dp 170 23 AIR_SENEGAL 30/04/2021 18:30 HC92 02/05/2021 14:25 14:25 02/05/2021 avion `,
                inline: false,
              },
              {
                name: "Un ejemplo podria ser:",
                value: `add_dp 172 24 TURKISH 30/04/2021 18:30 TK1059 02/05/2021 14:25 10:00 01/05/2021 asilo`,
                inline: false,
              },
              {
                name: "Si te falta algun dato pon un punto hay otro comando para actualizar",
                value: `add_dp 172 24 TURKISH 30/04/2021 18:30 . 02/05/2021 14:25 . 01/05/2021 .`,
                inline: false,
              }
          );
        message.channel.send(embed);
      } catch (error) {
        console.log(error);
      }
    },
  };