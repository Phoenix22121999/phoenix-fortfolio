import { Variants } from "framer-motion";

export const neuContainer: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};

export const neuItem: Variants = {
	initial: { opacity: 0, x: 20 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
	exit: {
		opacity: 0,
		x: -20,
		transition: {
			ease: "easeInOut",
			duration: 1,
		},
	},
};

export const neuItemOpacity: Variants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 1.5,
		},
	},
	exit: { opacity: 0 },
};

export const glassContainer: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.35,
		},
	},
};

export const glassItem: Variants = {
	initial: { opacity: 0, y: 200 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
	exit: {
		opacity: 0,
		y: -2,
		transition: {
			ease: "easeInOut",
			duration: 1,
		},
	},
};
