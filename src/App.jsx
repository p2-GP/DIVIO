import { RouterProvider } from "react-router-dom";
import router from "./router";
import { DataProvider } from "./stores/DataProvider";

export default function App() {
	return (
		<>
			<DataProvider>
				<RouterProvider router={router} />
			</DataProvider>
		</>
	);
}
