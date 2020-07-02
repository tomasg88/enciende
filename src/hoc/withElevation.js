import React, { useState } from "react";

const withElevation = (WrappedComponent) => {
	return (props) => {
		const [el, setEl] = useState(1);
		return (
			<WrappedComponent elevation={el} setElevation={setEl} {...props} />
		);
	};
};

export default withElevation;
