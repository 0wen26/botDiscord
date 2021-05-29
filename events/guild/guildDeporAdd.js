const DeportadosModel = require("../../models/deportadosShema");

module.exports = async (client, discord, member, message, args) => {
  let deportados = await DeportadosModel.create({
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
  deportados.save();
};
