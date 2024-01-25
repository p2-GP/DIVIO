import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { uid } from "uid";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_apiKey,
	authDomain: import.meta.env.VITE_authDomain,
	projectId: import.meta.env.VITE_projectId,
	storageBucket: import.meta.env.VITE_storageBucket,
	messagingSenderId: import.meta.env.VITE_messagingSenderId,
	appId: import.meta.env.VITE_appId,
	databaseURL: import.meta.env.VITE_database_url,
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const writeDatabase = (url, ...data) => {
	const uuid = uid();
	const response = set(ref(db, `${url}/${uuid}`), {
		...data,
	});

	return response;
};

export const readDatabase = async (url) => {
	const readRef = ref(db, url);

	return readRef;
};

export const randomID = (len) => {
	let result = "";
	if (result) return result;
	var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
		maxPos = chars.length,
		i;
	len = len || 5;
	for (i = 0; i < len; i++) {
		result += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return result;
};

export const dateNow = () => {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	return yyyy + "-" + mm + "-" + dd;
};
