import React from "react";

import { Button } from "./PrimaryButton.styles";

export default function PrimaryButton(props) {
	return (
		<Button type="submit" className="primary">
			{props.buttonContent}
		</Button>
	);
}
