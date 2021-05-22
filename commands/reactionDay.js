module.exports = {
  name: "reactionday",
  description: "Elegir el trabajo diario",
  async execute(client, message, args, Discord) {
    //console.log("hola");
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
      .setTitle("Elige el turno de trabajo")
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
      //console.log(count + "la primera");
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        //console.log(reaction.message.id);
        if (ultimoMsg === reaction.message.id && count === 0) {
          count++;
          console.log(count + "la segunda");
          if (reaction.emoji.name === "WEW") {
            let userId = user.id;
            //console.log(reaction.message.id);
            // message.channel.send(
            //   reaction.message.guild.members.cache.get(userId).nickname
            // );
            console.log(
              reaction.message.guild.members.cache.get(userId).nickname
            );
          } else if (reaction.emoji.name === "🇲") {
            console.log("hola");
          } else {
            return;
          }
        }
        count = 0;
      }
    });
  },
};
