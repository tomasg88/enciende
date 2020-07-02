import React from "react";
import Page from "../Page/Page";
import withData from "../../hoc/withData";
import { Typography, Paper, Grid, makeStyles, Button } from "@material-ui/core";
import withElevation from "../../hoc/withElevation";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "10vh",
	},
	paper: {
		minHeight: "30vh",
		overflow: "auto",
		padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
	},
	svcInfo: {
		height: "-webkit-fill-available",
	},
}));

const ServicesPage = ({ data }) => {
	const classes = useStyles();
	return (
		<Page background="blue">
			<Grid container spacing={2} className={classes.root}>
				{data.items.map((svc) => (
					<Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
						<Paper className={classes.paper} elevation={2}>
							<Grid
								container
								direction="column"
								justify="space-between"
								alignItems="center"
								className={classes.svcInfo}
							>
								<Grid
									item
									xl={12}
									lg={12}
									md={12}
									sm={12}
									xs={12}
								>
									<Typography
										variant="subtitle2"
										color="primary"
										paragraph
										key={svc.sys.id}
									>
										{`${svc.fields.name}`}
									</Typography>
								</Grid>
								<Grid
									item
									xl={12}
									lg={12}
									md={12}
									sm={12}
									xs={12}
								>
									<Typography variant="body2" paragraph>
										{
											"Lorem ipsm .. asdfa sdfasdlfjasdfl sflkasdf alsdkfj salkfajs lfkdsjf laksdjf alskdjfas ldkjfha d"
										}
									</Typography>
								</Grid>
								<Grid
									item
									xl={12}
									lg={12}
									md={12}
									sm={12}
									xs={12}
								>
									<Button variant="contained" color="primary">
										{svc.fields.price}
									</Button>
									{/* <Typography variant="subtitle2">
										{svc.fields.price}
									</Typography> */}
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Page>
	);
};

export default withData(withElevation(ServicesPage), "servicio");
