import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="absolute flex justify-center w-screen pl-10 pr-10 text-xl items-center h-10">
			<Link className="pl-5 pr-5" to="/">
				Home
			</Link>
			<Link className="pl-5 pr-5" to="/about">
				Sobre mi
			</Link>
			<Link className="pl-5 pr-5" to="/services">
				Servicios
			</Link>
		</div>
	);
};

export default Header;
