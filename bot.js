const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535832547821617152")
setInterval(function() {
channel.send(`Ragnar Shiled wall`);
}, 30)
})

client.login(process.env.BOT_TOKEN);