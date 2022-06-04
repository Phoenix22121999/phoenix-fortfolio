import React from "react";
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "./contexts/themeContext";
import AnimatedRoutes from "./AnimationRoutes";
import { Navigation } from "./components/Navigation/Navigation";
import { ThemeSelector } from "./components/ThemeSelecter/ThemeSelector";
function App() {
	return (
		<ThemeProvider>
			<section className="fortfolio__wrapper">
				<BrowserRouter>
					<AnimatedRoutes />
					<Navigation />
					<ThemeSelector />
				</BrowserRouter>
			</section>
		</ThemeProvider>
	);
}

export default App;
