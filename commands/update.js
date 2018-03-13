 exports.run = (client, message, args) => {
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");
   
    const { stdout, stderr, err } =  exec(`Git Pull ${require(`${process.cwd()}/package.json`).repository.url.split("+")[1]}`, { cwd: path.join(__dirname, "../../") }).catch(err => ({ err }));
    if (err) return console.error(err);
    const out = [];
    if (stdout) out.push(stdout);
    if (stderr) out.push(stderr);
     message.channel.send(out.join("---\n"), { code: true });
    if (!stdout.toString().includes("Already Up-To-Date")) {
      this.client.commands.get("reboot").run(message, args);
    }
  }

