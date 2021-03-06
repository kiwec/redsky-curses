const fs = require("fs");

class Config {
	constructor() {
		this.load();
	}

	load() {
		if (fs.existsSync("config.json")) {
			let json = JSON.parse(fs.readFileSync("config.json"));
			this.username = json.user || "";
			this.password = json.pass || "";
			this.player = json.player || "enabled";
			this.url = json.url || null;
		} else {
			this.username = "";
			this.password = "";
			this.player = "enabled";
			this.url = null;
		}
	}

	save() {
		var config = {
			user: this.username,
			pass: this.password,
			player: this.player,
			url: this.url || "url-du-skychat.fr"
		};

		fs.writeFileSync("config.json", JSON.stringify(config), err => {
			if (err) throw err;
		});
	}
}

module.exports = new Config();
