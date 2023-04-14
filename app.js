const Discord = require('discord.js-self');
const client = new Discord.Client();

const token = ''; //Search it on your developer options on discord
const friendId = ''; //Activate developer options on twitch, click on username, three dots and copy id
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('error', error => {
  console.error('Discord.js error:', error);
});

async function checkFriendStatus() {
    try {
      const friend = await client.users.fetch(friendId);
  
      const now = new Date();
      const statusMessage = `${now.toLocaleString()}: Your friend is ${
        friend.presence.status === 'online' ? 'online' : 'offline'
      }`;
  
      console.log(statusMessage);
    } catch (error) {
      console.error('Error checking friend status:', error);
    }
  }

async function start() {
  try {
    await client.login(token);

    setInterval(() => {
      checkFriendStatus();
    }, 60000);
  } catch (error) {
    console.error('Error logging in to Discord:', error);
  }
}

start();