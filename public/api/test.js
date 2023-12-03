const hello = "hello";

class Testing {
	constructor(apiToken) {
		this.apiToken = apiToken;
	}

	apiToken;
	isConnected = false;
	// check if valid api token

	async connect() {
		// will check if valid api token
		if (this.apiToken === "valid") {
			this.isConnected = true;
		}
	}

	async sendHello() {
		if (this.isConnected) {
			console.log(hello);
			return "SUCCESS";
		} else {
			return "ERROR";
		}
	}
}


window.Testing = Testing;