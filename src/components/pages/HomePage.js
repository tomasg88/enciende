import React from "react";
import Page from "../Page/Page";
import Shape from "../shapes/shape";

const HomePage = () => {
	return (
		<Page background="purple">
			<h4 className="animate__animated animate__swing">Home</h4>
			<Shape />
		</Page>
	);
};

export default HomePage;
