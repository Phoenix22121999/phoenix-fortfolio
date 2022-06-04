import { ReactElement } from "react";
import { ThemeKeys, ThemeValues, THEME_KEYS } from "../themes/themeValue";

export interface NavigationItem {
	label: string;
	icon: ReactElement;
	path: string;
}

export type ThemeObject = typeof THEME_KEYS;
export interface ThemeArrayItem {
	key: ThemeKeys;
	value: ThemeValues;
}
