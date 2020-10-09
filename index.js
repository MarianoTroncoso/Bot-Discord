const fs = require('fs');
const { Client, MessageEmbed, Collection } = require('discord.js');
const { prefix, token, uriMongo } = require('./config.json');
const client = new Client();

// mongo
const mongoose = require('mongoose');
const uri = uriMongo;
mongoose.connect(uri, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Me conecté a mongo')
})

// coleccion de comandos
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    // console.log(`Logged in as ${client.user.tag}!`);
    console.log('Secretaria a tu servicio');
});

client.on('message', message => {

    // no tiene prefijo o el autor del mensaje es el bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // quito el prefijo
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.map(arg => arg.toLocaleLowerCase());

    // quiere hacer un GET 
    if(command[0] === 'get'){

        // quiere un apunte 
        if(command[1] === 'apunte'){
            
            client.commands.get('getApunte').execute(message, args);
        }
        if(command[1] === 'clase'){
            client.commands.get('getClase').execute(message, args);
        }
    } 
    // quiere hacer un SET 
    if(command[0] === 'set'){
        // quiere un apunte 
        if(command[1] === 'apunte'){

            // console.log('quiere setter un apunte')
        }
        if(command[1] === 'clase'){
            // console.log('quiere setter un apunte')
        }
    }

});

client.login(token);