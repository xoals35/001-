const Discord = require('discord.js');
const client = new Discord.Client();
const token = "자신의 토큰"

client.on('ready', async() => {   
    console.log(`${client.user.tag}이가 켜졌습니다.`)  
    
    
    
client.on('message', message => {
  if (message.content === `(ping`) {
    message.channel.send('pong')
}
});

client.login(token);
