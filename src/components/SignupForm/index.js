import React, { useState } from "react";

import PrimaryButton from "../PrimaryButton";
import InputBox from "../InputBox";

import { Container } from "./SignupForm.styles";
import { Link } from "react-router-dom";

export default function SignupForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [repeatPasswordError, setRepeatPasswordError] = useState("");

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

		if (repeatPassword === "") {
			setRepeatPasswordError("Can't be empty");
		} else {
			setRepeatPasswordError("");
		}

		if (email !== "" && password !== "" && repeatPassword !== "") {
			console.log("Form submitted");
		}
	};

	return (
		<Container onSubmit={handleSubmission}>
			<div className="form-sections">
				<h1 className="heading-l">Sign Up</h1>
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
				<InputBox
					type="password"
					placeholder="Repeat password"
					handleError={{
						error: repeatPasswordError,
						setError: setRepeatPasswordError,
					}}
					handleValue={{
						value: repeatPassword,
						setValue: setRepeatPassword,
					}}
				/>
			</div>
			<div className="form-sections">
				<PrimaryButton buttonContent="Create an account" />
				<p className="body-m">
					Already have an account?{" "}
					<Link to="/entertainment-web-app/login" className="link">
						Login
					</Link>
				</p>
			</div>
		</Container>
	);
}
