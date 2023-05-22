import styled from "styled-components";

export const Container = styled.form`
	width: 90%;
	max-width: 400px;
	padding: 32px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
	gap: 40px;
	background-color: var(--semi-dark-blue);
	border-radius: 20px;

	div.form-sections {
		width: 84%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;
		gap: 24px;

		.link {
			color: var(--red);
		}

		h1 {
			width: 100%;
		}
	}
`;
