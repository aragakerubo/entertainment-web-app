import React from "react";

import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";

import { Wrapper } from "./LoginPage.styles";

export default function LoginPage() {
	return (
		<Wrapper>
			<Logo />
			<LoginForm />
		</Wrapper>
	);
}
