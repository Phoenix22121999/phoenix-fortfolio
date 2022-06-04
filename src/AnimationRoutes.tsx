import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { ROUTE } from "./utils/Route";
import {
	ContactInformation,
	Educations,
	Home,
	Knowledge,
	PersonalInformation,
	Project,
} from "./page";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path={ROUTE.HOME} element={<Home />}></Route>
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
				<Route
					path="/"
					element={<Navigate replace to={ROUTE.HOME} />}
				></Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
