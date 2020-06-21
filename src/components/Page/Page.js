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
			<Grid item xl={6} lg={8} md={10} sm={12} xs={12}>
				{children}
			</Grid>
		</Grid>
	);
};

export default Page;
