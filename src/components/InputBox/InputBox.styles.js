import styled from "styled-components";

export const Input = styled.input`
	width: calc(100% - 32px);
	padding: 0 16px 18px 16px;
	border-bottom: 1px solid
		var(${(props) => (props.error ? "--red" : "--greyish-blue")});

	&::placeholder {
		opacity: 0.5;
	}

	&:focus {
		border-bottom: 1px solid var(--pure-white);
	}

	&:autofill,
	&:-webkit-autofill {
		border-bottom: 1px solid var(--pure-white);
	}
`;

export const Error = styled.p`
	position: absolute;
	bottom: 18px;
	right: 17px;
	margin: 0;
	padding: 0;
	color: var(--red);
`;

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
`;
