module.exports = {
    name: "help_clear",
    description: "Ayuda comando eliminar mensajes",
  
    async execute(client, message, args, Discord) {
      try {
        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`AYUDA COMANDO ELIMINADOR DE MENSAJES`)
          .addFields(
            {
              name: "comando: clear{numero entre 2 y 99}",
              value: `Este comando sirve para eliminar un numero determinado de mensajes`,
              inline: false,
            },
            {
                name: "ejemplo de uso",
                value: `-clear 10, borraria 10 mensajes`,
                inline: false,
              },
          );
        message.channel.send(embed);
      } catch (error) {
        console.log(error);
      }
    },
  };
  