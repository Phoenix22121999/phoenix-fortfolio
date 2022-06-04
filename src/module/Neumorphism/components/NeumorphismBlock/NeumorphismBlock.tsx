import React from "react";
import "./NeumorphismBlock.scss";
import { motion } from "framer-motion";
import { neuContainer, neuItem } from "../../../../themes/motionVariants";
import classNames from "classnames";
type NeumorphismBlockProps = {
	reverse?: boolean;
};

export const NeumorphismBlock = ({ reverse }: NeumorphismBlockProps) => {
	return (
		<div
			className={classNames("neu-block__warpper", {
				"neu-block__warpper--reverse": reverse,
			})}
		>
			<motion.div
				variants={neuContainer}
				animate="animate"
				initial="initial"
				exit="exit"
				className="neu-block__leave"
				transition={{ duration: 10 }}
			>
				<motion.div
					variants={neuItem}
					className="neu-block__leave--inner"
				/>
			</motion.div>
			<motion.div
				variants={neuContainer}
				animate="animate"
				initial="initial"
				exit="exit"
				className="neu-block__crescent"
			>
				<motion.div
					className="neu-block__crescent--inset"
					variants={neuItem}
				></motion.div>
				<motion.div className="neu-block__crescent--hide"></motion.div>
			</motion.div>
			<motion.div
				className="neu-block__round"
				variants={neuContainer}
				animate="animate"
				initial="initial"
				exit="exit"
			>
				<motion.div
					variants={neuItem}
					className="neu-block__round--inner"
				/>
			</motion.div>
			<motion.div
				className="neu-block__square"
				variants={neuContainer}
				animate="animate"
				initial="initial"
				exit="exit"
			>
				<motion.div
					variants={neuItem}
					className="neu-block__square--inner"
				/>
			</motion.div>
		</div>
	);
};
