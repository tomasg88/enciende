import React, { useState, useEffect } from "react";
import { useContentful } from "react-contentful";
import {
	CircularProgress,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from "@material-ui/core";
import Page from "../components/Page/Page";

const fetchJson = async (url) => {
	const response = await fetch(url);
	return response.json();
};

const withData = (WrappedComponent, contentType) => {
	return (props) => {
		const { data, error, fetched, loading } = useContentful({
			contentType: contentType,
		});
		if (loading || !fetched) {
			return null;
		}

		if (error) {
			console.error(error);
			return null;
		}

		// See the Contentful query response
		console.debug(data);

		return (
			<>
				{loading ? (
					<Page>
						<CircularProgress color="primary" />
					</Page>
				) : data ? (
					<WrappedComponent data={data} {...props} />
				) : (
					<Page>
						<Dialog
							open={true}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
								{"Use Google's location service?"}
							</DialogTitle>
							<DialogContent>
								<DialogContentText id="alert-dialog-description">
									{error}
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button color="primary">Disagree</Button>
								<Button color="primary" autoFocus>
									Agree
								</Button>
							</DialogActions>
						</Dialog>{" "}
					</Page>
				)}
			</>
		);
	};
};

export default withData;
