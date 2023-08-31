import { useState, useEffect, useContext } from "react";

import {
	Container,
	Wrapper,
	VideoContainer,
	VideoCard,
	VideoCardInfo,
	VideoCardDetails,
	VideoBookmark,
} from "./BookmarksSection.styles";

import MovieIcon from "../../assets/icon-category-movie.svg";
import SeriesIcon from "../../assets/icon-category-tv.svg";
import Bookmarked from "../../assets/icon-bookmark-full.svg";
import NotBookmarked from "../../assets/icon-bookmark-empty.svg";
import PlayIcon from "../../assets/icon-play.svg";

import { DataContext } from "../../App";

export default function BookmarksSection(props) {
	const { data, setData } = useContext(DataContext);
	const [bookmarks, setBookmarks] = useState([]);

	const prefixUrl =
		"https://raw.githubusercontent.com/aragakerubo/entertainment-web-app/main/src";

	useEffect(() => {
		const videos = data.filter(
			(video) => video.isBookmarked && video.category === props.category
		);
		setBookmarks(videos);
	}, [data, props.category]);

	function handleBookmarkClick(e) {
		const index = e.target.getAttribute("data-index");

		const updatedData = [...data];
		updatedData[index].isBookmarked = !updatedData[index].isBookmarked;
		setData(updatedData);
	}

	return (
		<Wrapper>
			<h1 className="heading-l">
				Bookmarked {props.category === "Movie" ? "Movies" : "TV Series"}
			</h1>

			<Container>
				{bookmarks.map((video) => (
					<VideoContainer key={video.id}>
						<VideoCard
							background_url={`${prefixUrl}${video.thumbnail.regular.medium.slice(
								1
							)}`}
						>
							<div className="overlay">
								<img src={PlayIcon} alt="Play button" />
								<p className="heading-xs">Play</p>
							</div>
							<VideoBookmark
								data-index={video.id}
								onClick={handleBookmarkClick}
							>
								<img
									data-index={video.id}
									src={
										video.isBookmarked
											? Bookmarked
											: NotBookmarked
									}
									alt="Bookmark"
								/>
							</VideoBookmark>
						</VideoCard>
						<VideoCardInfo>
							<VideoCardDetails>
								<p className="body-s">{video.year}</p>
								<p className="body-s">•</p>
								<p className="body-s">
									<img
										src={
											video.category === "Movie"
												? MovieIcon
												: SeriesIcon
										}
										alt="Video category icon"
									/>
									{video.category}
								</p>
								<p className="body-s">•</p>
								<p className="body-s">{video.rating}</p>
							</VideoCardDetails>
							<h3 className="heading-m">{video.title}</h3>
						</VideoCardInfo>
					</VideoContainer>
				))}
			</Container>
		</Wrapper>
	);
}
