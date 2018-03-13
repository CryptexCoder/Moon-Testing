exports.run = (client, message, args) => {
 message.channel.send('Ping...').then(m => m.edit(`Latency Is ${m.createdTimestamp - message.createdTimestamp}MS - API Latency Is ${Math.round(client.ping)}MS`) );
}