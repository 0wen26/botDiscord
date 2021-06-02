module.exports = {
  name: "upd_dp",
  description: "Actualizar deportado",

  async execute(client, message, args, Discord) {
    const deportadosModel = require("../models/deportadosShema");

    try {
      const result = await deportadosModel.findOneAndUpdate(
        {
          numExp: args[0],
        },
        {
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
        },
        {
          upsert: true,
          new: true,
        }
      );
      console.log(result);
      //
    } catch (error) {
      console.log(error);
    }
  },
};
