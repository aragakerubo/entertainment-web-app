import React from "react";

import Logo from "../../components/Logo";
import SignupForm from "../../components/SignupForm";

import { Wrapper } from "./SignupPage.styles";

export default function SignupPage() {
	return (
		<Wrapper>
			<Logo />
			<SignupForm />
		</Wrapper>
	);
}
