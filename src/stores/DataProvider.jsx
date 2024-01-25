import React, { createContext, useState } from "react";

const dataContext = createContext();
export default dataContext;

export const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);

	return <dataContext.Provider value={{ data, setData, user, setUser, loading, setLoading }}>{children}</dataContext.Provider>;
};
