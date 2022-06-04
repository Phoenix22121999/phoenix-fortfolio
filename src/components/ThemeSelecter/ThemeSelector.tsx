import React, { useState } from "react";
import "./ThemeSelector.scss";

import classNames from "classnames";
import { GrAdd } from "react-icons/gr";
import { ThemeSelectorItem } from "./components/ThemeSelectorItem/ThemeSelectorItem";
import { THEME_ITEM_ARRAY } from "../../themes/themeValue";

export type ThemeSelectorProps = {};

export const ThemeSelector = React.memo((props: ThemeSelectorProps) => {
	const [active, setActive] = useState<boolean>(false);
	const onClick = () => {
		setActive(!active);
	};
	return (
		<div
			className={classNames("theme-selector__warpper", { active })}
			style={{
				transition: `1s`,
				transitionDelay: active
					? `0s`
					: `${0.1 * THEME_ITEM_ARRAY.length}s`,
			}}
		>
			<div className={classNames("theme-selector__menu")}>
				<div
					className={classNames("theme-selector__toggle")}
					onClick={onClick}
				>
					<GrAdd className="theme-selector__toggle__icon" />
				</div>
				{THEME_ITEM_ARRAY.map((item, index) => {
					const position: number =
						(360 / THEME_ITEM_ARRAY.length) * index;
					return (
						<ThemeSelectorItem
							key={index}
							position={position}
							index={index}
							active={active}
							item={item}
							setActive={setActive}
						/>
					);
				})}
			</div>
		</div>
	);
});
