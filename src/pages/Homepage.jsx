import React, { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import VideoHome from "../components/VideoHome";

const Homepage = () => {
	const [params, setParams] = useSearchParams();
	const query = Object.fromEntries(params.entries()).roomID;

	return (
		<>
			<VideoHome params={query} setParams={setParams} />
		</>
	);
};

export default Homepage;
