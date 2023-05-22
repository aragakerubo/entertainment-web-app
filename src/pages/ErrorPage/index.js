import React from "react";

import { Wrapper } from "./ErrorPage.styles";
import Logo from "../../components/Logo";

export default function ErrorPage() {
	return (
		<Wrapper>
			<Logo />
			<h1 className="error-heading">
				4<span className="blinking-error">0</span>4
			</h1>
			<p className="body-m">Page not found</p>
		</Wrapper>
	);
}
