module.exports = {
  name: "resum",
  description: "resumem daily dia indicado",
  async execute(client, message, args, Discord) {
    const profileModel = require("../models/dailySchema");
    const fecha = new Date();
    const año = fecha.getFullYear();

    const dia = args[0];
    let embed = "";
    if (!args[0]) return message.reply("por favor inserta una fecha en formato dd/m (por ejemplo 22/6 )!");
    try {
      profileData = await profileModel.find({
        fecha: `${dia}/${año}`,
      });

      if (profileData.length === 0) {
        return message.reply("No se ha encontrado nada con la fecha indicada");
      } else {
        for (const i of profileData) {
          embed = new Discord.MessageEmbed()
            .setColor("#e42643")
            .setTitle(`El ${dia}/${año} estos son los turnos:`)
            .addFields(
              {
                name: "Persona",
                value: `${i.apodo}`,
                inline: true,
              },
              {
                name: "Turno",
                value: `${i.trabajo}`,
                inline: true,
              },
              {
                name: "Icono",
                value: `${i.icono}`,
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
