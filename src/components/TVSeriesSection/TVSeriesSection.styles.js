import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 25px;
	width: 100%;
	max-width: 1240px;
`;

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	column-gap: 40px;
	row-gap: 32px;
	width: 100%;
	min-width: 100%;
`;

export const VideoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 8px;
`;

export const VideoCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(${(props) => props.background_url});
	background-size: cover;
	width: 280px;
	min-width: 280px;
	height: 174px;
	min-height: 174px;
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 3px;
	width: 100%;
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
	top: 16px;
	right: 16px;
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
