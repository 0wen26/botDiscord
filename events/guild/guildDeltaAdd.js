const DeltaModel = require("../../models/deltaShema");

module.exports = async (client, discord, member, message, args) => {
  let delta = await DeltaModel.create({
    fecha: args[0],
    numVuelo: args[1],
    TL: args[2],
    catering_1: args[3],
    catering_2: args[4],
    patio_1: args[5],
    patio_2: args[6],
    FD: args[7],
    BD: args[8],
    R: args[9],
  });
  delta.save();
};
