import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 64px);
	min-height: 697px;
	max-height: 1024px;
	width: 96px;
	min-width: 96px;
	max-width: 96px;
	padding: 32px 0 32px 32px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	width: 100%;
	max-width: 96px;
	padding-top: 35.5px;
	padding-bottom: 32px;
	background-color: var(--semi-dark-blue);
	border-radius: 20px;
`;

export const Holder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 75px;
`;

export const LogoIcon = styled.img`
	width: 32px;
`;

export const OptionsHolder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;

	.options-link {
		height: 20px;
		text-decoration: none;
	}
`;

export const Option = styled.img`
	width: 20px;
	cursor: pointer;

	&.active {
		filter: brightness(0) invert(1);
	}

	&:hover {
		filter: brightness(0) saturate(100%) invert(41%) sepia(8%)
			saturate(6178%) hue-rotate(320deg) brightness(108%) contrast(116%);
	}

	&.active:hover {
		filter: brightness(0) invert(1);
	}
`;

export const Profile = styled.img`
	width: 40px;
	border-radius: 50%;
	cursor: pointer;
	outline: var(--pure-white) solid 2px;
`;
