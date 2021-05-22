const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
//const guild = new Discord.GuildMember(client,guild);
const axios = require("axios");
let respuesta;
let info = new Map();
let mandarina = new Map();
let sandia = new Map();
let numVuelo;
const params = {
  access_key: "7948ca5dbb2290bdc7e60421ed6fe979",
};
function api(message, numVuelo) {
  //numVuelo;
  axios
    .get(
      `http://api.aviationstack.com/v1/flights?flight_iata=${numVuelo}&access_key=7948ca5dbb2290bdc7e60421ed6fe979`
    )
    .then((response) => {
      const apiResponse = response.data;
      let hora = apiResponse["data"][0]["arrival"]["estimated"];
      horaFormat = hora.substring(11, 16);
      respuesta = `Llegada dia: ${apiResponse["data"][0]["flight_date"]}
    a las ${horaFormat}`;
      message.channel.send(respuesta);
    })
    .catch((error) => {
      console.log(error);
    });
}
client.on("messageReactionRemove", async (reaction, message, guild, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error(err);
      return;
    }
  }
  let idUsuario = message.id;
  let icono = reaction.emoji.name;
  let apodo = reaction.message.guild.members.cache.get(idUsuario).nickname;
  for (let [key, value] of mandarina) {
    if (icono) {
      mandarina.delete(apodo);
    }
  }
  sandia.set(apodo, reaction.emoji.name);
  console.log(reaction.emoji.name);
  console.log(apodo);
});

client.on("messageReactionAdd", async (reaction, message, guild, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error(err);
      return;
    }
  }
  let D = ":regional_indicator_d:";
  let idUsuario = message.id;
  let apodo = reaction.message.guild.members.cache.get(idUsuario).nickname;
  //reaction.message.guild.members.cache.get(idUsuario).nickname;
  // reaction.message.guild.members.cache.get('700306947244818473').nickname;
  //console.log(reaction.message.guild.members.cache);

  //if (reaction.emoji.name === "🍉") {
  mandarina.set(apodo, reaction.emoji.name);
  //}

  let i = reaction.emoji.name;
  info.set(i, apodo);
});
client.on("ready", () => {
  //api();
});
client.on("message", (message) => {
  //api(message, message.content);
  //console.log(message.content);

  if (message.content === "!e") {
    for (let [key, value] of mandarina) {
      message.channel.send(key + " trabajará " + value);
    }
  }
  if (message.content === "!i") {
    for (let [key, value] of sandia) {
      message.channel.send(key + " trabajará " + value);
    }
  }
});

client.login("ODQxODE1NzYzOTUwMTA4NzEz.YJsQBg.LYbDbbY8MV4LnLNsnKI_WvS6Z60");
