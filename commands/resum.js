module.exports = {
  name: "resum",
  description: "resumem daily dia indicado",
  async execute(client, message, args, Discord) {
    const profileModel = require("../models/dailySchema");
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    //const dia = fecha.getDate();
    const dia = args[0];
    let mensaje = "";
    if (!args[0])
      return message.reply(
        "please enter the amount of messages that you want to clear!"
      );
    //if (isNaN(args[0])) return message.reply("please enter a real number!");

    try {
      profileData = await profileModel.find({
        fecha: `${dia}/${año}`,
      });
      if (!profileData) {
        console.log("nada");
      } else {
        for (const i of profileData) {
          let embed = new Discord.MessageEmbed()
            .setColor("#e42643")
            .setTitle(`El ${dia}/${año} estos son los turnos:`)
            .setDescription(mensaje)
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
// await message.channel.messages
//   .fetch({ limit: args[0] })
//   .then((messages) => {
//     message.channel.send(dia);
//   });
