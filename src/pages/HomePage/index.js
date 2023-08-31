import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../../components/Dashboard";
import SearchBar from "../../components/SearchBar";
import TrendingSection from "../../components/TrendingSection";
import RecommendedSection from "../../components/RecommendedSection";
import MoviesSection from "../../components/MoviesSection";
import ErrorPage from "../ErrorPage";

import { Wrapper, Container, Holder } from "./HomePage.styles";

export default function Home() {
	return (
		<Wrapper>
			<Dashboard />
			<Container>
				<Routes>
					<Route
						exact
						path="/"
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
						path="/movies"
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
					<Route path="/*" element={<ErrorPage />} />
				</Routes>
			</Container>
		</Wrapper>
	);
}
