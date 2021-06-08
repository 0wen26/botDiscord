module.exports = {
    name: "help_resumen",
    description: "Ayuda comando resumen daily",
  
    async execute(client, message, args, Discord) {
      try {
        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`AYUDA COMANDO RESUMEN DAILY`)
          .addFields(
            {
                name: "comando: resumen",
                value: `Este comando muestra el resumen del ultimo daily`,
                inline: false,
              },
              {
                name: "Un ejemplo podria ser:",
                value: `resumen`,
                inline: false,
              },
              
          );
        message.channel.send(embed);
      } catch (error) {
        console.log(error);
      }
    },
  };