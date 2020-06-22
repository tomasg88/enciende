import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
	const [elevation, setElevation] = useState(1);
	return (
		<AppBar
			position="absolute"
			color="transparent"
			elevation={elevation}
			onMouseEnter={() => setElevation(3)}
			onMouseLeave={() => setElevation(1)}
		>
			<Toolbar className="flex justify-center w-screen pl-10 pr-10 text-xl items-center h-10 z-10 border-red-300">
				<Link className="pl-5 pr-5" to="/">
					<Typography variant="subtitle1" color="">
						Home
					</Typography>
				</Link>
				<Link className="pl-5 pr-5" to="/about">
					<Typography variant="subtitle1" color="">
						Sobre mi
					</Typography>
				</Link>
				<Link className="pl-5 pr-5" to="/services">
					<Typography variant="subtitle1" color="">
						Servicios
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
