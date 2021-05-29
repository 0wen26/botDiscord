module.exports = {
  name: "add_dp",
  description: "Añadir deportado",

  async execute(client, message, args, Discord) {
    const deportadosModel = require("../models/deportadosShema");
    let deportadoData;
    try {
      deportadoData = await deportadosModel.findOne({
        numExp: args[0],
      });
      if (!deportadoData) {
        let profile = await deportadosModel.create({
          numExp: args[0],
          asistencia: args[1],
          compAerea: args[2],
          fechaEntrada: args[3],
          horaEntrada: args[4],
          vueloSalida: args[5],
          fechaSalida: args[6],
          horaSalida: args[7],
          horaRealSalida: args[8],
          diaRealSalida: args[9],
          motivo: args[10],
        });
        profile.save();
      } else {
        message.channel.send("El expediente ya existe");
      }
      //
    } catch (error) {
      console.log(error);
    }
  },
};
