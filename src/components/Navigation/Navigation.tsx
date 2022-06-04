import React, { useState } from "react";
import "./Navigation.scss";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { NAVIGATION_ITEM } from "../../utils/NavArray";
import { GrAdd } from "react-icons/gr";

export type NavigationProps = {};

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
