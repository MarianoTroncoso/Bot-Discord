const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

require('dotenv').config();

client.on('ready', () => {
    // console.log(`Logged in as ${client.user.tag}!`);
    console.log('Secretario a tu servicio');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('Pong!');
    }

    if (message.content === 'ejemplo') {
        const embed = new MessageEmbed()
            .setTitle('APUNTE: Recursos')
            .setColor('ORANGE')
            // .setURL('https://docs.google.com/document/d/1n5zrD9G2BMEi-B-B6unI4cZGUC74a9IoIGAd_WYbLb4/edit')
            .setDescription('https://docs.google.com/document/d/1n5zrD9G2BMEi-B-B6unI4cZGUC74a9IoIGAd_WYbLb4/edit');

        message.channel.send(embed);
    }
});

client.login(process.env.TOKEN);