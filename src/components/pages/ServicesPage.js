import React from "react";
import Page from "../Page/Page";
import withData from "../../hoc/withData";
import { useContentful } from "react-contentful";
import { Typography } from "@material-ui/core";

const ServicesPage = ({ data }) => (
	<Page background="blue">
		<h4>Servicio</h4>
		{data.items.map((svc) => (
			<Typography variant="caption" paragraph>
				{svc.fields.name}
			</Typography>
		))}
	</Page>
);

export default withData(ServicesPage, "servicio");
