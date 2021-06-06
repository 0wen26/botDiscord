module.exports = {
    name: "help_resum",
    description: "Ayuda comando mostrar daily fecha indicada",
  
    async execute(client, message, args, Discord) {
      try {
        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`AYUDA COMANDO MOSTRAR DAILY FECHA INDICADA`)
          .addFields(
            {
              name: "comando: resum{ fecha }",
              value: `Este comando sirve para mostrar el daily de la fecha indicada`,
              inline: false,
            },
            {
                name: "ejemplo de uso",
                value: `-resum 28/5, muestra daily del dia 28 del mes 5`,
                inline: false,
              },
          );
        message.channel.send(embed);
      } catch (error) {
        console.log(error);
      }
    },
  };