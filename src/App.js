import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
	ContentfulClient,
	ContentfulProvider,
	withContentful,
} from "react-contentful";

import tw from "twin.macro";
import styled from "@emotion/styled";

const contentClient = new ContentfulClient({
	accessToken: "emSrA-bpF66nnvE3xjPu-q18g6ufCGDMQ1i0oNhfOas",
	space: "rwruvvbev2hq",
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
