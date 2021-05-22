const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
let level = new Map();

let mandarina = new Map();
let final = new Map();
let sandia = new Map();
const person = {
  id: "",
  apodo: "",
  emoji: "",
};

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

  let idUsuario = message.id;
  let apodo = reaction.message.guild.members.cache.get(idUsuario).nickname;
  let idMensaje = reaction.message.channel.lastMessageID;
  let icono = reaction.emoji.id;
  let iconoNombre = reaction.emoji.name;

  if (idMensaje === "") {
  }
  if (icono === "841838835750666270") {
    level.set(apodo, iconoNombre);
  }
  //final.set(...mandarina);
});
client.on("ready", () => {});
let mapa = mandarina.keys();

client.on("message", (message) => {
  //console.log(mandarina);
  if (message.content === "!e") {
    for (let i = 0; i < 3; i++) {
      //console.log(mapa.next().value);
    }

    for (let [key, value] of level) {
      message.channel.send(key + " trabajará " + value);
    }
  }
});

client.login("ODQxODE1NzYzOTUwMTA4NzEz.YJsQBg.LYbDbbY8MV4LnLNsnKI_WvS6Z60");

//18/05 actualizado

let level = new Map();

client.on("messageReactionAdd", async (reaction, message, guild, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error(err);
      return;
    }
  }

  let idUsuario = message.id;
  let apodo = reaction.message.guild.members.cache.get(idUsuario).nickname;
  let idMensaje = reaction.message.channel.lastMessageID;
  let icono = reaction.emoji.id;
  let iconoNombre = reaction.emoji.name;

  if (idMensaje === "") {
  }
  if (icono === "841838835750666270") {
    level.set(apodo, iconoNombre);
  }
});
client.on("ready", () => {});

client.on("message", (message) => {
  if (message.content === "!e") {
    console.log(message.channel.messages.cache);
    console.log(message.channel.lastMessageID);
  }
});

client.login("ODQxODE1NzYzOTUwMTA4NzEz.YJsQBg.LYbDbbY8MV4LnLNsnKI_WvS6Z60");
