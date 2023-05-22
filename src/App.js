import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./GlobalStyles";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
	return (
		<div>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
