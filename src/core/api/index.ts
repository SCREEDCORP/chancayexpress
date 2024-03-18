import { UploadClass } from "./upload";

class APIClass {
	get upload() {
		return new UploadClass();
	}
}

export const API = new APIClass();
