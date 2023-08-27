import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 24px;
	width: 100%;
	max-width: 1280px;
`;

export const SearchInput = styled.input`
	width: 94%;
	max-width: 1184px;
	padding: 0 0 14px 0;
	border: none;

	&::placeholder {
		color: var(--pure-white);
		opacity: 0.5;
	}

	&:focus {
		border-bottom: 1px solid var(--greyish-blue);
	}
`;

export const SearchIcon = styled.img`
	width: 32px;
`;
