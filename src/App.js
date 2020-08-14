import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
	ContentfulClient,
	ContentfulProvider,
	withContentful,
} from "react-contentful";

const contentClient = new ContentfulClient({
	accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
	space: process.env.REACT_APP_CONTENTFUL_SPACE,
});

const App = () => (
	<ContentfulProvider client={contentClient}>
		<BrowserRouter>
			<div className="App">
				<Layout />
			</div>
		</BrowserRouter>
	</ContentfulProvider>
);

export default withContentful(App);
