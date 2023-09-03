import React from "react";
import { NavLink } from "react-router-dom";

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
	return (
		<Wrapper>
			<Container>
				<Holder>
					<LogoIcon src={LogoImage} alt="Company Logo" />
					<OptionsHolder>
						<NavLink to="/dashboard/home" className="options-link">
							<Option src={HomeImage} alt="Home" />
						</NavLink>
						<NavLink
							to="/dashboard/movies"
							className="options-link"
						>
							<Option src={MovieImage} alt="Movies" />
						</NavLink>
						<NavLink
							to="/dashboard/tv-series"
							className="options-link"
						>
							<Option src={TVImage} alt="TV Series" />
						</NavLink>
						<NavLink
							to="/dashboard/bookmarks"
							className="options-link"
						>
							<Option src={BookmarksImage} alt="Bookmarks" />
						</NavLink>
					</OptionsHolder>
				</Holder>
				<Profile src={AvatarImage} alt="Profile" />
			</Container>
		</Wrapper>
	);
}
