import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiSunflower } from "react-icons/gi";
import tw from "twin.macro";
import styled from "@emotion/styled";
import Headroom from "react-headroom";
import { AiOutlineInstagram } from "react-icons/ai";
//import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
	return (
		<Headroom disableInlineStyles>
			<HeaderContainer>
				<InnerHeader>
					<Logo>
						<Link to="/">
							<GiSunflower className="mr-3 text-4xl text-indigo-900" />
							Enciende
						</Link>
					</Logo>
					<Nav>
						<Link to="/">Inicio</Link>
						<Link to="/services">Servicios</Link>
						<Link to="/about">Sobre mi</Link>
						<a href="/insta" className="ml-3 text-gray-800">
							<AiOutlineInstagram className="text-3xl" />
						</a>
					</Nav>
				</InnerHeader>
			</HeaderContainer>
		</Headroom>
	);
};

export default Header;

const HeaderContainer = styled.header`
	${tw`z-50 px-2 py-5 md:py-0`}
	${tw`bg-white border-b border-indigo-300`}
	${tw`transition-all duration-500 `}
`;

const InnerHeader = styled.div`
	${tw`relative flex items-center justify-between max-w-6xl`}
	${tw`px-0 m-auto sm:px-6`}
`;

const Logo = styled.div`
	${tw`m-0 md:pl-0 md:absolute`}

	a {
		${tw`flex font-serif text-2xl font-bold tracking-widest `}
		${tw`text-indigo-600 `}
	}
`;

const Nav = styled.nav`
	${tw`items-center justify-end hidden text-indigo-600 md:flex`}
	flex:1;

	a {
		${tw`p-5 font-serif text-xl text-center text-indigo-600 border-b-2 border-transparent`}
		${tw`transition-all duration-300 transform`}

		&:hover {
			${tw`text-indigo-700 border-indigo-600`}
		}
	}
`;
