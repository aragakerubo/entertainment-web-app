import React from "react";

import Dashboard from "../../components/Dashboard";
import SearchBar from "../../components/SearchBar";
import TrendingSection from "../../components/TrendingSection";
import RecommendedSection from "../../components/RecommendedSection";

import { Wrapper, Container, Holder } from "./HomePage.styles";

export default function Home() {
	return (
		<Wrapper>
			<Dashboard />
			<Container>
				<SearchBar placeholder="Search for movies or TV series" />
				<Holder>
					<TrendingSection />
					<RecommendedSection />
				</Holder>
			</Container>
		</Wrapper>
	);
}
