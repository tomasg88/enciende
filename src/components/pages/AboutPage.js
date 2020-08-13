import React from "react";
import Page from "../Page/Page";
import withData from "../../hoc/withData";
import tw from "twin.macro";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
const AboutPage = ({ data }) => {
	return (
		<AboutContainer>
			<AboutSection>
				<Name>
					<Flip bottom cascade duration={2500}>
						{data.items[0].fields.name}
					</Flip>
				</Name>
				<Fade delay={600} duration={2500}>
					<Description>
						{data.items[0].fields.description}
					</Description>
					<AboutMe>{data.items[0].fields.aboutMe}</AboutMe>
				</Fade>
				<Slide bottom duration={2500}>
					<MediumUser>{data.items[0].fields.mediumUser}</MediumUser>
				</Slide>
			</AboutSection>
		</AboutContainer>
	);
};

export default withData(AboutPage, "about");

const AboutContainer = styled.div`
	${tw`relative w-full m-auto bg-white`}
	${tw`pt-12`}
`;

const AboutSection = styled.section`
	${tw`max-w-3xl py-24 mx-auto`}
`;

const Name = styled.h2`
	${tw`font-serif text-3xl font-bold text-left text-indigo-800 `}
	${tw`relative z-20 pb-3`}
`;

const Description = styled.h3`
	${tw`my-6 font-bold text-left text-gray-800`}
`;

const AboutMe = styled.p`
	${tw`text-base text-left text-gray-800 `}
`;

const MediumUser = styled.a`
	${tw`font-serif text-2xl text-white bg-indigo-500 `}
	${tw`rounded-none shadow-md cursor-pointer`}
	${tw`inline-block px-6 py-2 mt-24`}
	${tw`transition-all duration-500 transform`}

	&:hover {
		${tw`-translate-y-1 bg-indigo-600 rounded-lg`}
	}
`;
