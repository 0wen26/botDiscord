module.exports = {
    name: "help_deltadaily",
    description: "Ayuda comando mostrar daily delta fecha indicada",
  
    async execute(client, message, args, Discord) {
      try {
        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`AYUDA COMANDO DE MOSTRAR DAILY DELTA FECHA INDICADA`)
          .addFields(
            {
                name: "comando: deltadaily",
                value: `Este comando muestra el daily de la delta segun la fecha indicada`,
                inline: false,
              },              
              {
                name: "Un ejemplo podria ser:",
                value: `deltadaily 28/6`,
                inline: false,
              },
              
          );
        message.channel.send(embed);
      } catch (error) {
        console.log(error);
      }
    },
  };