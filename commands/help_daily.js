module.exports = {
    name: "help_daily",
    description: "Ayuda comando mostrar daily",
  
    async execute(client, message, args, Discord) {
      try {
        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`AYUDA COMANDO DE DAILY`)
          .addFields(
            {
              name: "comando: daily",
              value: `Este comando muestra un mensaje con una leyenda para que cada trabajador elija el turno.`,
              inline: false,
            },
            {
                name: "ejemplo de uso",
                value: `-daily, aparece un mensaje para que cada trabajor elija el truno de trabajo.`,
                inline: false,
              },
          );
        message.channel.send(embed);
      } catch (error) {
        console.log(error);
      }
    },
  };