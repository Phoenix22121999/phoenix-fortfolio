import { ThemeKeys } from "../themes/themeValue";
import { ThemeObject } from "../types/types";

export const themeObjectToArray = (object: ThemeObject) => {
	let tmp: any[] = [];
	Object.entries(object).forEach(([key]) =>
		Object.keys(object[key as ThemeKeys]).forEach((value) => {
			tmp.push({ key, value });
		})
	);
	return tmp;
};
