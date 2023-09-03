import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../../components/Dashboard";
import SearchBar from "../../components/SearchBar";
import TrendingSection from "../../components/TrendingSection";
import RecommendedSection from "../../components/RecommendedSection";
import MoviesSection from "../../components/MoviesSection";

import { Wrapper, Container, Holder } from "./HomePage.styles";
import TVSeriesSection from "../../components/TVSeriesSection";
import BookmarksSection from "../../components/BookmarksSection";

export default function Home() {
	return (
		<Wrapper>
			<Dashboard />
			<Container>
				<Routes>
					<Route
						exact
						path="home"
						element={
							<>
								<SearchBar placeholder="Search for movies or TV series" />
								<Holder>
									<TrendingSection />
									<RecommendedSection />
								</Holder>
							</>
						}
					/>
					<Route
						exact
						path="movies"
						element={
							<>
								<>
									<SearchBar placeholder="Search for movies" />
									<Holder>
										<MoviesSection />
									</Holder>
								</>
							</>
						}
					/>
					<Route
						exact
						path="tv-series"
						element={
							<>
								<>
									<SearchBar placeholder="Search for TV series" />
									<Holder>
										<TVSeriesSection />
									</Holder>
								</>
							</>
						}
					/>
					<Route
						exact
						path="bookmarks"
						element={
							<>
								<SearchBar placeholder="Search for bookmarked shows" />
								<Holder>
									<BookmarksSection category="Movie" />
									<BookmarksSection category="TV Series" />
								</Holder>
							</>
						}
					/>
				</Routes>
			</Container>
		</Wrapper>
	);
}
