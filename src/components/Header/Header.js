import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
	return (
		<AppBar position="absolute" color="transparent" elevation={1}>
			<Toolbar className="flex justify-center">
				<Link className="pl-5 pr-5" to="/">
					<Typography variant="subtitle1" color="primary">
						Home
					</Typography>
				</Link>
				<Link className="pl-5 pr-5" to="/about">
					<Typography variant="subtitle1" color="primary">
						Sobre mi
					</Typography>
				</Link>
				<Link className="pl-5 pr-5" to="/services">
					<Typography variant="subtitle1" color="primary">
						Servicios
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
