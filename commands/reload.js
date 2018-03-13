 exports.run = (client, message, args) => {

if (!args || args.size < 1) return message.channel.send(`${this.client.responses.reloadMissingArg.random().replaceAll("{{user}}", message.member.displayName)}`);
    
    const commands = this.client.commands.get(args[0]) || this.client.commands.get(this.client.aliases.get(args[0]));
    if (!commands) return message.channel.send(`${this.client.responses.reloadNotFound.random().replaceAll("{{user}}", message.member.displayName)}`);

    let response = this.client.unloadCommand(commands.conf.location, commands.help.name);
    if (response) return message.channel.send(`${this.client.responses.reloadErrUnload.random().replaceAll("{{user}}", message.member.displayName).replaceAll("{{response}}", response)}`);

    response = this.client.loadCommand(commands.conf.location, commands.help.name);
    if (response) return message.channel.send(`${this.client.responses.reloadErrLoad.random().replaceAll("{{user}}", message.member.displayName).replaceAll("{{response}}", response)}`);

    message.channel.send(`${this.client.responses.reloadSuccess.random().replaceAll("{{command}}", commands.help.name)}`);
  }
