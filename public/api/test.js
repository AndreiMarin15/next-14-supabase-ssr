const createSupabaseServerClient = require("@/lib/supabase/server");
const { revalidatePath, unstable_noStore: noStore } = require("next/cache");

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

	async readTodo() {
		noStore();
		const supabase = await createSupabaseServerClient();
		return await supabase.from("todo-demo").select("*");
	}

	async getFirstTodo() {
		const { data: todos } = await this.readTodo();

		return todos[0].title.toString()
	}
}

// Attach Testing to the global window object
global.Testing = Testing;
window.Testing = Testing;