module.exports = {
    name: "comandos",
    description: "Lista todos los comandos",
  
    async execute(client, message, args, Discord) {
      try {
        let embed = new Discord.MessageEmbed()
          .setColor("#e42643")
          .setTitle(`LISTADO COMANDOS DEL BOT`)
          .addFields(
              
            {
              name: "-add_delta",
              value: `Este comando sirve para agregar un daily de delta\n
                    el comando **-help_add_delta** explica como usarlo.`,
              inline: false,
            },
            {
              name: "-upd_delta",
              value: `Este comando sirve para actualizar un daily de delta\n
               el comando **-help_upd_delta** explica como usarlo.`,
              inline: false,
            },
            {
              name: "-clear",
              value: `Este comando es para borrar un numero de mensajes entre 2 y 99\n
              el comando **-help_clear** explica como usarlo.`,
              inline: false,
            },
            {
                name: "-daily",
                value: `Este comando sirve para mostrar el daily de trabajo para que cada trabajador elija el turno de trabajo\n
                el comando **-help_daily** explica como usarlo.`,
                inline: false,
              },
              {
                name: "-resum {fecha}",
                value: `Este comando muestra el resumen del daily de la fecha indicada\n
                el comando **-help_resum** explica como usarlo.`,
                inline: false,
              },
              {
                name: "-resumen",
                value: `Este comando muestra el resumen del ultimo daily\n
                el comando **-help_resumen** explica como usarlo.`,
                inline: false,
              },
              {
                name: "-deltadaily {fecha}",
                value: `Este comando muestra el daily de la delta en la fecha indicada\n
                el comando **-help_deltadaily** explica como usarlo.`,
                inline: false,
              },
              {
                name: "-dp",
                value: `Este comando muestra todos los deportados existentes en la base de datos\n
                el comando **-help_dp** explica como usarlo.`,
                inline: false,
              },
              {
                name: "-add_dp",
                value: `Este comando sirve para añadir deportados\n
                el comando **-help_add_dp** explica como usarlo.`,
                inline: false,
              },
              {
                name: "-upd_dp",
                value: `Este comando sirve para actualizar deportados\n
                el comando **-help_upd_dp** explica como usarlo.`,
                inline: false,
              },
              
          );
        message.channel.send(embed);
      } catch (error) {
        console.log(error);
      }
    },
  };
  