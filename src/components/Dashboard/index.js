import React from "react";
import { Link } from "react-router-dom";

import {
	Wrapper,
	Container,
	Holder,
	LogoIcon,
	OptionsHolder,
	Option,
	Profile,
} from "./Dashboard.styles";

import LogoImage from "../../assets/logo.svg";
import HomeImage from "../../assets/icon-nav-home.svg";
import MovieImage from "../../assets/icon-nav-movies.svg";
import TVImage from "../../assets/icon-nav-tv-series.svg";
import BookmarksImage from "../../assets/icon-nav-bookmark.svg";
import AvatarImage from "../../assets/image-avatar.png";

export default function Dashboard() {
	/**
	 * handleSelection - Handles the selection of the options
	 * @param {*} e - The event object
	 */
	const handleSelection = (e) => {
		e.target.classList.add("active");

		const siblings = Array.from(
			e.target.parentNode.parentNode.children
		).filter((child) => child.children[0] !== e.target);
		siblings.forEach((sibling) =>
			sibling.children[0].classList.remove("active")
		);
	};

	return (
		<Wrapper>
			<Container>
				<Holder>
					<LogoIcon src={LogoImage} alt="Company Logo" />
					<OptionsHolder>
						<Link to="/" className="options-link">
							<Option
								className="active"
								src={HomeImage}
								onClick={handleSelection}
								alt="Home"
							/>
						</Link>
						<Link to="/movies" className="options-link">
							<Option
								src={MovieImage}
								onClick={handleSelection}
								alt="Movies"
							/>
						</Link>
						<Link to="/tv-series" className="options-link">
							<Option
								src={TVImage}
								onClick={handleSelection}
								alt="TV Series"
							/>
						</Link>
						<Link to="/bookmarks" className="options-link">
							<Option
								src={BookmarksImage}
								onClick={handleSelection}
								alt="Bookmarks"
							/>
						</Link>
					</OptionsHolder>
				</Holder>
				<Profile src={AvatarImage} alt="Profile" />
			</Container>
		</Wrapper>
	);
}
