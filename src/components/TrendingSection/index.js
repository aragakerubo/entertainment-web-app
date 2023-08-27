import { useState, useEffect, useContext } from "react";

import {
	Carousel,
	Wrapper,
	VideoCard,
	VideoCardInfo,
	VideoCardDetails,
	VideoBookmark,
} from "./TrendingSection.styles";

import MovieIcon from "../../assets/icon-category-movie.svg";
import SeriesIcon from "../../assets/icon-category-tv.svg";
import Bookmarked from "../../assets/icon-bookmark-full.svg";
import NotBookmarked from "../../assets/icon-bookmark-empty.svg";
import PlayIcon from "../../assets/icon-play.svg";

import { DataContext } from "../../App";

export default function TrendingSection() {
	const { data, setData } = useContext(DataContext);
	const [trendingVideos, setTrendingVideos] = useState([]);
	const [mouseDown, setMouseDown] = useState(false);
	const [startX, setStartX] = useState(undefined);
	const [scrollLeft, setScrollLeft] = useState(undefined);
	const prefixUrl =
		"https://raw.githubusercontent.com/aragakerubo/entertainment-web-app/main/src";

	useEffect(() => {
		const videos = data.filter((video) => video.thumbnail.trending);
		setTrendingVideos(videos);
	}, [data]);

	function handleBookmarkClick(e) {
		const index = e.target.getAttribute("data-index");

		const updatedData = [...data];
		updatedData[index].isBookmarked = !updatedData[index].isBookmarked;
		setData(updatedData);
	}

	function handleStartScroll(e) {
		setMouseDown(true);
		setStartX(e.pageX - e.currentTarget.offsetLeft);
		setScrollLeft(e.currentTarget.scrollLeft);

		e.target.classList.add("active");
	}

	function handleScroll(e) {
		if (!mouseDown) return;
		e.preventDefault();

		const x = e.pageX - e.currentTarget.offsetLeft;

		const walk = (x - startX) * 2;
		e.currentTarget.scrollLeft = scrollLeft - walk;
		// deactivate hover effect on child cards while scrolling
		const cards = e.currentTarget.children;
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.pointerEvents = "none";
		}
	}

	function handleStopScroll(e) {
		setMouseDown(false);
		e.target.classList.remove("active");

		// reactivate hover effect on child cards after scrolling
		const cards = e.currentTarget.children;
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.pointerEvents = "auto";
		}
	}

	return (
		<Wrapper>
			<h1 className="heading-l">Trending</h1>
			<div className="carousel-container">
				<Carousel
					onMouseDown={handleStartScroll}
					onMouseMove={handleScroll}
					onMouseUp={handleStopScroll}
					onMouseLeave={handleStopScroll}
					onTouchStart={handleStartScroll}
					onTouchMove={handleScroll}
					onTouchEnd={handleStopScroll}
				>
					{trendingVideos.map((video) => (
						<VideoCard
							key={video.id}
							background_url={`${prefixUrl}${video.thumbnail.trending.large.slice(
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
							<VideoCardInfo>
								<VideoCardDetails>
									<p className="body-m">{video.year}</p>
									<p className="body-m">•</p>
									<p className="body-m">
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
									<p className="body-m">•</p>
									<p className="body-m">{video.rating}</p>
								</VideoCardDetails>
								<h3 className="heading-m">{video.title}</h3>
							</VideoCardInfo>
						</VideoCard>
					))}
				</Carousel>
			</div>
		</Wrapper>
	);
}
