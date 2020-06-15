import React from "react";

const Page = ({ children, page }) => (
	<div className={`page-container ${page}`}>{children}</div>
);

export default Page;
