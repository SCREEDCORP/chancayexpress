import { UploadClass } from "./upload";
import { UserClass } from "./user";

class APIClass {
	get upload() {
		return new UploadClass();
	}

	get users() {
		return new UserClass();
	}
}

export const API = new APIClass();
