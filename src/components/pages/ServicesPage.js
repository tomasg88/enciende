import React from "react";
import withData from "../../hoc/withData";
import withElevation from "../../hoc/withElevation";
import tw from "twin.macro";
import styled from "@emotion/styled";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

//import Page from "../Page/Page";
//import { Typography, Paper, Grid, makeStyles, Button } from "@material-ui/core";

const ServicesPage = ({ data }) => {
	return (
		<div className="py-24 font-serif bg-indigo-400 bg-pattern">
			<HeroTitle>
				<Flip bottom cascade duration={2500}>
					Servicios
				</Flip>
			</HeroTitle>
			<div className="grid max-w-6xl grid-cols-1 gap-4 pt-8 mx-3 md:mx-auto sm:grid-cols-2 lg:grid-cols-4">
				{data.items.map((svc) => (
					<Fade delay={500}>
						<div className="p-6 text-center bg-white rounded-md shadow-lg">
							<span className="block my-3 text-base text-indigo-600 uppercase">
								Conectá
							</span>
							<h3
								key={svc.sys.id}
								className="h-24 pb-2 text-xl font-bold text-gray-700"
							>{`${svc.fields.name}`}</h3>

							<p className="pb-3 mb-2 text-base border-b border-indigo-200 ">
								Lorem ipsm .. asdfa sdfasdlfjasdfl sflkasdf
								alsdkfj salkfajs lfkdsjf laksdjf alskdjfas
								ldkjfha d
							</p>
							<b className="block mb-2 text-3xl text-indigo-600">
								${svc.fields.price}
							</b>
						</div>
					</Fade>
				))}
			</div>
		</div>
	);
};

export default withData(withElevation(ServicesPage), "servicio");

const HeroTitle = styled.h1`
	${tw`mt-8 text-5xl font-bold text-indigo-100`}
	${tw`relative z-20`}
`;
