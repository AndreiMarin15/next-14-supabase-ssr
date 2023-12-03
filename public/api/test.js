import createSupabaseServerClient from "@/lib/supabase/server";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";


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
		const { data: todos } = await readTodo();

		return todos[0].title.toString()
	}
}


window.Testing = Testing;