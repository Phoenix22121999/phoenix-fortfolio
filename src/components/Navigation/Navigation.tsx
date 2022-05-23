import React, { useState } from "react";
import "./Navigation.scss";
import { NavigationItem } from "./../../types/types";
import { GrAdd, GrBook, GrContactInfo, GrTechnology } from "react-icons/gr";
import { AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import classNames from "classnames";
import { ROUTE } from "../../contants/Route";
import { Link } from "react-router-dom";

export type NavigationProps = {};
export const NAVIGATION_ITEM: NavigationItem[] = [
	{
		label: "Personal Info",
		icon: <AiOutlineUser />,
		path: ROUTE.PERSONAL_INFORMATION,
	},
	{ label: "Knowledge", icon: <GrTechnology />, path: ROUTE.KNOWLEDGE },
	{ label: "Educations", icon: <GrBook />, path: ROUTE.EDUCATIONS },
	{ label: "Project", icon: <AiOutlineProject />, path: ROUTE.PROJECT },
	{
		label: "Contact Ingo",
		icon: <GrContactInfo />,
		path: ROUTE.CONTACT_INFORMATION,
	},
];
export const Navigation = React.memo((props: NavigationProps) => {
	const [active, setActive] = useState<Boolean>(false);
	const onClick = () => {
		setActive(!active);
	};
	return (
		<div
			className={classNames("navigation__warpper", { active })}
			style={{
				transition: `0.2s`,
				transitionDelay: active
					? `0.2s`
					: `${0.1 * NAVIGATION_ITEM.length - 0.2}s`,
			}}
		>
			<div className={classNames("navigation__menu")}>
				<div
					className={classNames("navigation__toggle")}
					onClick={onClick}
				>
					<GrAdd className="navigation__toggle__icon" />
				</div>
				{NAVIGATION_ITEM.map((item, index) => {
					const position: number =
						(360 / NAVIGATION_ITEM.length) * index;
					return (
						<li
							key={index}
							className="navigation__item"
							style={{
								transform: active && `rotate(${position}deg)`,
								transitionDelay: active
									? `${0.1 * index + 0.2}s`
									: `0s`,
							}}
						>
							<Link to={item.path}>
								<div
									className="navigation__link"
									style={{
										transform: `rotate(-${position}deg)`,
									}}
								>
									{item.icon}
								</div>
							</Link>
						</li>
					);
				})}
			</div>
		</div>
	);
});
