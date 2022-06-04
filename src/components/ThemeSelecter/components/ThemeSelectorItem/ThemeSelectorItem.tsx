import classNames from "classnames";
import React, { useContext } from "react";
import { ThemeContext } from "../../../../contexts/themeContext";
import { ThemeArrayItem } from "../../../../types/types";
import "./ThemeSelectorItem.scss";
type ThemeSelectorItemProps = {
	active: boolean;
	position: number;
	index: number;
	item: ThemeArrayItem;
	setActive: (bool: boolean) => void;
};

export const ThemeSelectorItem = ({
	active,
	position,
	index,
	item,
	setActive,
}: ThemeSelectorItemProps) => {
	const theme = useContext(ThemeContext);
	const onClick = () => {
		theme?.changeTheme(item.key, item.value);

		setActive(false);
	};
	return (
		<li
			className={classNames(
				"theme-selector__item",
				`theme-selector__item--${item.key}`,
				`theme-selector__item--${item.value}`
			)}
			style={{
				transform: active ? `rotate(${position}deg)` : undefined,
				transitionDelay: active ? `${0.05 * index + 1}s` : `0s`,
			}}
			onClick={onClick}
		>
			<div
				className="theme-selector__link"
				style={{
					transform: `rotate(-${position}deg) `,
				}}
			></div>
		</li>
	);
};
