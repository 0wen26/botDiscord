module.exports = {
  name: "add_delta",
  description: "Añadir daily delta",

  async execute(client, message, args, Discord) {
    const deltaModel = require("../models/deltaShema");
    let deltaData;
    try {
      deltaData = await deltaModel.findOne({
        numExp: args[0],
      });
      if (!deltaData) {
        let profile = await deltaModel.create({
          fecha: args[0],
          TL: args[1],
          numVuelo: args[2],
          catering_1: args[3],
          catering_2: args[4],
          patio_1: args[5],
          patio_2: args[6],
          FD: args[7],
          BD: args[8],
          R: args[9],
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
