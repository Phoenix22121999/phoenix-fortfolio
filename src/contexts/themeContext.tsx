import * as React from "react";
import { ThemeKeys, ThemeValues, THEME_KEYS } from "../themes/themeValue";
import classNames from "classnames";

export type ThemeContextType = {
	key: ThemeKeys;
	value: string;
	changeTheme: (key: ThemeKeys, value: ThemeValues) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
	children: React.ReactNode;
};
const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [key, setKey] = React.useState<ThemeKeys>("neu");
	const [value, setValue] = React.useState<ThemeValues>("dark");
	const changeTheme = (key: ThemeKeys, value: ThemeValues) => {
		setKey(key);
		setValue(value);
	};

	return (
		<ThemeContext.Provider value={{ key, value, changeTheme }}>
			<div className={classNames(key, THEME_KEYS[key][value])}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
