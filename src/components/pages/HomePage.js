import React from "react";
import withData from "../../hoc/withData";
import tw from "twin.macro";
import styled from "@emotion/styled";
import Flip from "react-reveal/Flip";

//import Page from "../Page/Page";
//import Shape from "../shapes/Shape";
//import { Typography } from "@material-ui/core";

const HomePage = ({ data }) => {
	console.log("HomePage -> props", data);
	return (
		<HomeContainer>
			<HomeHero className="bg-pattern">
				<HeroTitle>
					<Flip bottom cascade duration={2500}>
						Un espacio de Reiki
					</Flip>
				</HeroTitle>
			</HomeHero>
		</HomeContainer>
	);
};

export default withData(HomePage, "about");

const HomeContainer = styled.div`
	${tw`relative w-full m-auto bg-white`}
	${tw`pt-12`}
`;

const HomeHero = styled.div`
	${tw`relative w-full m-auto bg-indigo-100`}
	${tw`flex flex-col items-center justify-center`}
	${tw`pt-12`}
	min-height: 60vh;
`;

const HeroTitle = styled.h1`
	${tw`font-serif text-3xl font-bold text-indigo-600`}
	${tw`relative z-20 pb-3`}
`;
