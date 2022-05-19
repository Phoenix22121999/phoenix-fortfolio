import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { ROUTE } from "./contants/Route";
import {
	ContactInformation,
	Educations,
	Knowledge,
	PersonalInformation,
	Project,
} from "./page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={ROUTE.PERSONAL_INFORMATION}
					element={<PersonalInformation />}
				></Route>
				<Route
					path={ROUTE.CONTACT_INFORMATION}
					element={<ContactInformation />}
				></Route>
				<Route path={ROUTE.EDUCATIONS} element={<Educations />}></Route>
				<Route path={ROUTE.KNOWLEDGE} element={<Knowledge />}></Route>
				<Route path={ROUTE.PROJECT} element={<Project />}></Route>
				<Route path={"/"} element={<PersonalInformation />}></Route>
			</Routes>
			<Navigation />
		</BrowserRouter>
	);
}

export default App;
