require("dotenv").config();

module.exports = async (Discord, client, message) => {
  const prefix = "-";
  //console.log(message.content.startsWith("-"));
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);
  //if (command) command.execute(client, message, args, Discord);

  try {
    command.execute(client, message, args, Discord);
  } catch (err) {
    message.reply("Hay un error con el comando");
    console.log(err);
  }
};
