import React from "react";

const Page = ({ children, background }) => (
	<div className={`back-main-${background} pt-10 h-screen`}>{children}</div>
);

export default Page;
