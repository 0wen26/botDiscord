const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const command = require("./comandos/commands");

client.on("ready", () => {
  console.log("Esta ready!!!");

  command(client, "ping", (message) => {
    message.channel.send("Pong");
  });
});

client.login(config.BOT_TOKEN);
