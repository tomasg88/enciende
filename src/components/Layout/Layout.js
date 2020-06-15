import React from "react";
import withData from "../../hoc/withData";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import AboutPage from "../pages/AboutPage";
import Header from "../Header/Header";

const Layout = (props) => {
	return (
		<div className="content">
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/services" exact component={ServicesPage} />
				<Route path="/about" exact component={AboutPage} />
			</Switch>
		</div>
	);
};
export default Layout;
