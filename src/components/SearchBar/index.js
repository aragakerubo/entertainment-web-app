import React from "react";

import { Container, SearchInput, SearchIcon } from "./SearchBar.styles";

import SearchImage from "../../assets/icon-search.svg";

export default function SearchBar(props) {
	return (
		<Container>
			<SearchIcon src={SearchImage} alt="Search Icon" />
			<SearchInput
				className="heading-m"
				type="text"
				placeholder={props.placeholder}
			/>
		</Container>
	);
}
