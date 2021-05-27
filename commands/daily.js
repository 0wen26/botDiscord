module.exports = {
  name: "daily",
  description: "Elegir el trabajo diario",

  async execute(client, message, args, Discord) {
    const profileModel = require("../models/dailySchema");
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const fechaActual = `${dia}/${mes}/${año}`;
    const channel = "841815185244422195";

    const weworkEmoji = "<:WEW:841838835964182588>";
    const levelEmoji = "<:LEV:841838835750666270>";
    const singaEmoji = "<:Singa:841840059590377502>";
    const depMñnEmoji = "🇲";
    const depTrdEmoji = "🇹";
    const depNocheEmoji = "🇳";
    const cargoEmoji = "<:CAR:841839772678488075>";
    const emiratesEmoji = "<:EMI:841838835628900432>";
    const offEmoji = "<:OFF:841838835964837949>";
    const sabEmoji = "<:SAB:841838835775176724>";
    const deltaEmoji = "<:DEL:841838835608584252>";

    let embed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle(
        `Elige el turno de trabajo del día ${dia + 1} del ${mes} del ${año}`
      )
      .setDescription(
        "seleccionando el icono correspondiente\n" +
          `${weworkEmoji} WEWORK \n
            ${levelEmoji} LEVEL \n
            ${singaEmoji} SINGAPORE \n
            ${depMñnEmoji} DEPORTADOS MAÑANA \n
            ${depTrdEmoji} DEPORTADOS TARDE \n
            ${depNocheEmoji} DEPORTADOS TARDE \n
            ${cargoEmoji} CARGUEROS \n
            ${emiratesEmoji} EMIRATES \n
            ${offEmoji} OFF \n
            ${sabEmoji} SANT BELTRAN \n
            ${deltaEmoji} DELTA \n`
      );
    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(weworkEmoji);
    messageEmbed.react(levelEmoji);
    messageEmbed.react(singaEmoji);
    messageEmbed.react(depMñnEmoji);
    messageEmbed.react(depTrdEmoji);
    messageEmbed.react(depNocheEmoji);
    messageEmbed.react(cargoEmoji);
    messageEmbed.react(emiratesEmoji);
    messageEmbed.react(offEmoji);
    messageEmbed.react(sabEmoji);
    messageEmbed.react(deltaEmoji);

    let count = 0;
    let ultimoMsg = message.channel.lastMessageID;
    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;
      let userId = user.id;
      let profileData;
      if (reaction.message.channel.id == channel) {
        if (ultimoMsg === reaction.message.id && count === 0) {
          count++;
          if (reaction.emoji.name === "WEW") {
            let trabajo = "Wework";

            try {
              profileData = await profileModel.findOne({
                userID: userId,
                fecha: fechaActual,
              });
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "<:WEW:841838835964182588>",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "LEV") {
            let trabajo = "LEVEL";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "<:LEV:841838835750666270>",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "Singa") {
            let trabajo = "SINGAPORE";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "<:Singa:841840059590377502>",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "🇲") {
            let trabajo = "DEPORTADOS MAÑANA";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "🇲",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "🇹") {
            let trabajo = "DEPORTADOS TARDE";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "🇹",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "🇳") {
            let trabajo = "DEPORTADOS NOCHE";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "🇳",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "CAR") {
            let trabajo = "CARGUEROS";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "<:CAR:841839772678488075>",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "EMI") {
            let trabajo = "EMIRATES";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "<:EMI:841838835628900432>",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "OFF") {
            let trabajo = "OFF";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "<:OFF:841838835964837949>",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "SAB") {
            let trabajo = "SANT BELTRAN";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "<:SAB:841838835775176724>",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "DEL") {
            let trabajo = "DELTA";

            try {
              if (!profileData) {
                let profile = await profileModel.create({
                  userID: userId,
                  messageID: reaction.message.id,
                  apodo:
                    reaction.message.guild.members.cache.get(userId).nickname,
                  icono: "<:DEL:841838835608584252>",
                  fecha: fechaActual,
                  trabajo: trabajo,
                });
                profile.save();
              }
            } catch (error) {
              console.log(error);
            }
          } else {
            return;
          }
        }
        count = 0;
      }
    });
    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;
      let userId = user.id;
      let profileData;
      if (reaction.message.channel.id == channel) {
        if (ultimoMsg === reaction.message.id && count === 0) {
          count++;
          if (reaction.emoji.name === "WEW") {
            let trabajo = "Wework";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "LEV") {
            let trabajo = "LEVEL";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "Singa") {
            let trabajo = "SINGAPORE";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "🇲") {
            let trabajo = "DEPORTADOS MAÑANA";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "🇹") {
            let trabajo = "DEPORTADOS TARDE";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "🇳") {
            let trabajo = "DEPORTADOS NOCHE";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "CAR") {
            let trabajo = "CARGUEROS";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "EMI") {
            let trabajo = "EMIRATES";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "OFF") {
            let trabajo = "OFF";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "SAB") {
            let trabajo = "SANT BELTRAN";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else if (reaction.emoji.name === "DEL") {
            let trabajo = "DELTA";

            try {
              profileData = await profileModel.findOneAndDelete({
                userID: userId,
                fecha: fechaActual,
                trabajo: trabajo,
              });
            } catch (error) {
              console.log(error);
            }
          } else {
            return;
          }
        }
        count = 0;
      }
    });
  },
};
//console.log(reaction.message.id);
// message.channel.send(
//   reaction.message.guild.members.cache.get(userId).nickname
// );
// console.log(
//   reaction.message.guild.members.cache.get(userId).nickname
// );
//console.log(reaction.message.id);
//console.log(fechaActual);
//console.log("hola");
