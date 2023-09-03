import React, { useState } from "react";

import PrimaryButton from "../PrimaryButton";
import InputBox from "../InputBox";

import { Container } from "./LoginForm.styles";
import { Link } from "react-router-dom";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleSubmission = (e) => {
		e.preventDefault();

		if (email === "") {
			setEmailError("Can't be empty");
		} else {
			setEmailError("");
		}

		if (password === "") {
			setPasswordError("Can't be empty");
		} else {
			setPasswordError("");
		}

		if (email !== "" && password !== "") {
			console.log("Form submitted");
		}
	};

	return (
		<Container onSubmit={handleSubmission}>
			<div className="form-sections">
				<h1 className="heading-l">Login</h1>
			</div>
			<div className="form-sections">
				<InputBox
					type="email"
					placeholder="Email address"
					handleError={{ error: emailError, setError: setEmailError }}
					handleValue={{ value: email, setValue: setEmail }}
				/>
				<InputBox
					type="password"
					placeholder="Password"
					handleError={{
						error: passwordError,
						setError: setPasswordError,
					}}
					handleValue={{ value: password, setValue: setPassword }}
				/>
			</div>
			<div className="form-sections">
				<PrimaryButton buttonContent="Login to your account" />
				<p className="body-m">
					Don't have an account?{" "}
					<Link to="/entertainment-web-app/signup" className="link">
						Sign Up
					</Link>
				</p>
			</div>
		</Container>
	);
}
