module.exports = {
  name: "upd_delta",
  description: "Actualizar daily delta",

  async execute(client, message, args, Discord) {
    const deltaModel = require("../models/deltaShema");

    try {
      await deltaModel.findOneAndUpdate(
        {
          fecha: args[0],
          numVuelo: args[1],
        },
        {
          fecha: args[0],
          TL: args[2],
          numVuelo: args[1],
          catering_1: args[3],
          catering_2: args[4],
          patio_1: args[5],
          patio_2: args[6],
          FD: args[7],
          BD: args[8],
          R: args[9],
        },
        {
          upsert: true,
          new: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
};
