import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 25px;
	width: 100%;

	div.carousel-container {
		height: 230px;
		width: 100%;
		overflow: hidden;
	}
`;

export const Carousel = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	min-width: 100%;
	height: 100%;
	overflow: hidden;
	cursor: grab;

	&.active {
		cursor: grabbing;
	}
`;

export const VideoCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(${(props) => props.background_url});
	background-size: cover;
	margin-right: 40px;
	width: 470px;
	min-width: 470px;
	height: 100%;
	border-radius: 8px;
	position: relative;

	.overlay {
		display: none;
		align-items: center;
		justify-content: center;
		gap: 19px;
		padding: 9px 24px 9px 9px;
		border-radius: 28.5px;
		background-color: rgba(255, 255, 255, 0.25);
		cursor: pointer;
	}

	&:hover {
		background: linear-gradient(
				0deg,
				rgba(0, 0, 0, 0.5),
				rgba(0, 0, 0, 0.5)
			),
			url(${(props) => props.background_url});
		background-size: cover;

		.overlay {
			display: flex;
		}
	}

	&:last-child {
		margin-right: 44px;
	}
`;

export const VideoCardInfo = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 3px;
	padding: 24px;
	width: calc(100% - 48px);
`;

export const VideoCardDetails = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;

		img {
			width: 12px;
			height: 12px;
		}
	}
`;

export const VideoBookmark = styled.div`
	position: absolute;
	top: 24px;
	right: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.5);
	cursor: pointer;

	img {
		width: 12px;
	}

	&:hover {
		background-color: var(--pure-white);

		img {
			filter: brightness(0);
		}
	}
`;
