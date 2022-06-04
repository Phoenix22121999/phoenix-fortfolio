import { themeObjectToArray } from "../utils/Function";

export const THEME_KEYS = {
	glass: {
		light: "glass--light",
		dark: "glass--dark",
	},
	neu: {
		light: "neu--light",
		dark: "neu--dark",
	},
} as const;

export const THEME_VALUE = {
	light: "glass--light",
	dark: "glass--dark",
} as const;

export const THEME_ITEM_ARRAY = themeObjectToArray(THEME_KEYS);
export const tmp = [
	{
		key: "glass",
		value: ["glass--light", "glass--dark"],
	},
];
export type ThemeKeys = keyof typeof THEME_KEYS;
export type ThemeValues = keyof typeof THEME_VALUE;

// export type ThemeValues<TKey extends ThemeKeys> = keyof typeof THEME_KEYS[TKey];
export const getDeepValue = <
	TObj,
	TKey extends keyof TObj,
	TValue extends keyof TObj[TKey]
>(
	theme: TObj,
	key: TKey,
	value: TValue
) => {
	return theme[key][value];
};
