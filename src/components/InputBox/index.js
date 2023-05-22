import React from "react";

import { Input, Error, Wrapper } from "./InputBox.styles";

export default function InputBox(props) {
	const handleValueChange = (e) => {
		props.handleValue.setValue(e.target.value);

		if (e.target.value !== "") {
			props.handleError.setError("");
		}
	};

	return (
		<Wrapper>
			<Input
				type={props.type}
				placeholder={props.placeholder}
				className="body-m"
				error={props.handleError.error}
				value={props.handleValue.value}
				onChange={handleValueChange}
			/>
			{props.handleError.error && (
				<Error className="body-s">{props.handleError.error}</Error>
			)}
		</Wrapper>
	);
}
