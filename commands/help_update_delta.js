module.exports = {
  name: "help_update_delta",
  description: "Ayuda comando update delta",

  async execute(client, message, args, Discord) {
    try {
      let embed = new Discord.MessageEmbed()
        .setColor("#e42643")
        .setTitle(`AYUDA COMANDO MODIFICAR DAILY DELTA`)
        .addFields(
          {
            name: "comando: upd_delta",
            value: `Este comando sirve para actualizar el daily de la delta añadido previamente:\n        
              EL ORDEN ES IMPORTANTE\n`,
            inline: false,
          },
          {
            name: "",
            value: `fecha Num vuelo TL caterling 1 catering 2 patio 1 patio 2 FrontDoor Backdoor Rampa\n
                      Cada campo esta separado por un espacio si hay un nombre compuesto poner _`,
            inline: false,
          },
          {
            name: "Este es el orden del comando:",
            value: `fecha Num vuelo TL caterling 1 catering 2 patio 1 patio 2 FrontDoor Backdoor Rampa\n
                      Cada campo esta separado por un espacio si hay un nombre compuesto poner _`,
            inline: false,
          },
          {
            name: "si hay un nombre compuesto poner _",
            value: `add_delta 01/06/21 195 ruben santi miguel_cantalejo andres jesus gladys saray pepa`,
            inline: false,
          },
          {
            name: "Un ejemplo podria ser:",
            value: `add_delta 01/06/21 195 ruben santi miguel andres jesus gladys saray pepa`,
            inline: false,
          },
          {
            name: "Si te falta algun dato pon un punto hay otro comando para actualizar",
            value: `add_delta 01/06/21 195 ruben santi miguel . jesus . saray pepa`,
            inline: false,
          }
        );
      message.channel.send(embed);
    } catch (error) {
      console.log(error);
    }
  },
};
