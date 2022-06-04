import { NavigationItem } from "../types/types";
import React from "react";

import { ROUTE } from "./Route";
import { GrBook, GrContactInfo, GrTechnology, GrHome } from "react-icons/gr";
import { AiOutlineProject, AiOutlineUser } from "react-icons/ai";

export const NAVIGATION_ITEM: NavigationItem[] = [
	{ label: "Knowledge", icon: <GrTechnology />, path: ROUTE.KNOWLEDGE },
	{ label: "Home", icon: <GrHome />, path: ROUTE.HOME },

	{
		label: "Personal Info",
		icon: <AiOutlineUser />,
		path: ROUTE.PERSONAL_INFORMATION,
	},
	{ label: "Educations", icon: <GrBook />, path: ROUTE.EDUCATIONS },
	{ label: "Project", icon: <AiOutlineProject />, path: ROUTE.PROJECT },
	{
		label: "Contact Ingo",
		icon: <GrContactInfo />,
		path: ROUTE.CONTACT_INFORMATION,
	},
];
