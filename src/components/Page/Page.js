import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	mainGrid: {
		width: "100vw",
		height: "100vh",
		paddingTop: theme.spacing(10),
	},
}));

const Page = ({ children, background }) => {
	const classes = useStyles();
	return (
		<Grid
			container
			alignItems="flex-start"
			justify="center"
			className={clsx(
				classes.mainGrid,
				`back-main-${background}`,
				`animate__animated animate__fadeIn`
			)}
		>
			<Grid item xl={6} lg={8} md={10} sm={12} xs={12}>
				{children}
			</Grid>
		</Grid>
	);
};

export default Page;
