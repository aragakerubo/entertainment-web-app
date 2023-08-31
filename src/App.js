import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import dataDump from "./data.json";

export const DataContext = createContext();

function App() {
	// Add id to each video object
	dataDump = dataDump.map((video, index) => ({ id: index, ...video }));
	const [data, setData] = useState(dataDump);
	return (
		<div>
			<GlobalStyles />
			<DataContext.Provider value={{ data, setData }}>
				<BrowserRouter>
					<Routes>
						<Route path="*" element={<Home />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/login" element={<LoginPage />} />
					</Routes>
				</BrowserRouter>
			</DataContext.Provider>
		</div>
	);
}

export default App;
