import React from "react";
import Page from "../Page/Page";
import withData from "../../hoc/withData";
import { useContentful } from "react-contentful";

const ServicesPage = (props) => {
	const { data, error, fetched, loading } = useContentful({
		contentType: "servicio",
		// query: {
		// 	"fields.slug[in]": `/${props || ""}`,
		// },
	});

	if (loading || !fetched) {
		return null;
	}

	if (error) {
		console.error(error);
		return null;
	}

	if (!data) {
		return <p>Page does not exist.</p>;
	}

	// See the Contentful query response
	console.log(data);

	return (
		<Page background="blue">
			<h4>Servicio</h4>
			{/* {data && data.length > 0 && data.map((row) => <p>{row}</p>)} */}
		</Page>
	);
};

export default ServicesPage;
