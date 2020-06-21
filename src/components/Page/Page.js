import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	mainGrid: {
		width: "100vw",
		height: "100vh",
	},
}));

const Page = ({ children, background }) => {
	const classes = useStyles();
	return (
		<Grid
			container
			alignItems="center"
			justify="center"
			direction="column"
			className={clsx(classes.mainGrid, `back-main-${background}`)}
		>
			{children}
		</Grid>
	);
};

export default Page;
