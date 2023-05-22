import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	padding-top: 3rem;
	padding-bottom: 3rem;

	h1.error-heading {
		color: var(--red);
		font-size: 4rem;
		font-weight: 700;
	}

	span.blinking-error {
		animation: flicker 5s infinite alternate;
	}

	@keyframes flicker {
		0%,
		18%,
		22%,
		25%,
		53%,
		57%,
		100% {
			opacity: 1;
		}
		20%,
		24%,
		55% {
			opacity: 0;
		}
	}
`;
