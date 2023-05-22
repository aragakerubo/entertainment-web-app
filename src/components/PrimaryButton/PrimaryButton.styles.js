import styled from "styled-components";

export const Button = styled.button`
	width: 100%;
	padding: 14px 0;
	font-weight: 300;
	font-size: 15px;
	line-height: 19px;
	text-align: center;
	color: var(--pure-white);
	background-color: var(--red);
	border-radius: 6px;
	border: none;
	cursor: pointer;

	&:hover {
		color: var(--semi-dark-blue);
		background-color: var(--pure-white);
	}
`;
