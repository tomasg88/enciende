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
	// accessToken: contentful,
	// space: contentful,
});

function App() {
	return (
		<ContentfulProvider client={contentClient}>
			<BrowserRouter>
				<div className="App">
					<Layout />
				</div>
			</BrowserRouter>
		</ContentfulProvider>
	);
}

export default withContentful(App);
