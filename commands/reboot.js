 exports.run = (client, message, args) => {
       try {
      message.channel.send(`${this.client.responses.rebootMessages.random().replaceAll("{{user}}", message.member.displayName)}`);
      this.client.commands.forEach(async cmd => {
        await this.client.unloadCommand(cmd);
      });
      process.exit(1);
    } catch (e) {
      console.log(e);
    }
  }
