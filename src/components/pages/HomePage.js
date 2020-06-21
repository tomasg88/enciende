import React from "react";
import Page from "../Page/Page";
import Shape from "../shapes/Shape";
import withData from "../../hoc/withData";
import { Typography } from "@material-ui/core";

const HomePage = ({ data }) => {
	console.log("HomePage -> props", data);
	return (
		<Page background="purple">
			<h4 className="animate__animated animate__swing">Home</h4>
			<Shape />
			<div className="block border-gray-400">
				<Typography variant="h4" color="primary">
					{data.items[0].fields.name}
				</Typography>
				<Typography variant="caption" paragraph>
					{data.items[0].fields.aboutMe}
				</Typography>
				<Typography variant="button" paragraph>
					{data.items[0].fields.description}
				</Typography>
				<Typography variant="subtitle2" color="secondary" paragraph>
					{data.items[0].fields.mediumUser}
				</Typography>
			</div>
		</Page>
	);
};

export default withData(HomePage, "about");
