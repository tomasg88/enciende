import React, { useState, useEffect } from "react";

const fetchJson = async (url) => {
	const response = await fetch(url);
	return response.json();
};

const withData = (WrappedComponent) => {
	return (props) => {
		const [data, setData] = useState({});

		useEffect(() => {
			const url = "";

			fetchJson(url)
				.then((jsonData) => setData(jsonData))
				.catch((err) => console.log(`Error -> ${err}`));
		}, []);
		return <WrappedComponent data={data} />;
	};
};

export default withData;
