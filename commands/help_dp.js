module.exports = {
    name: "help_dp",
    description: "Ayuda comando mostrar deportados",
  
    async execute(client, message, args, Discord) {
      try {
        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`AYUDA COMANDO MOSTRAR DEPORTADOS`)
          .addFields(
            {
              name: "comando: dp",
              value: `Este comando sirve para mostrar todos los deportados existentes.`,
              inline: false,
            },
            
          );
        message.channel.send(embed);
      } catch (error) {
        console.log(error);
      }
    },
  };