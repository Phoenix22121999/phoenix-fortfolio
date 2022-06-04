import React from "react";
import { motion } from "framer-motion";
import { neuItem } from "../../../../themes/motionVariants";
import classNames from "classnames";
import { NavigationItem } from "../../../../types/types";
import "./NeuNavigationCard.scss";
import { useNavigate } from "react-router-dom";

type NeuNavigationCardProps = {
	index: number;
	navItem: NavigationItem;
};

export const NeuNavigationCard = ({
	index,
	navItem,
}: NeuNavigationCardProps) => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate(navItem.path);
	};
	return (
		<motion.div
			variants={neuItem}
			className={`neu-home__nav-card-warpper neu-home__nav-card-warpper-${index}`}
			style={{ animationDelay: `${index * 0.5 + 2}s` }}
			onClick={onClick}
		>
			<div
				className={classNames(
					"neu-home__nav-card",
					`neu-home__nav-card--${index}`
				)}
			>
				<div className="neu-home__nav-card-icon">{navItem.icon}</div>
			</div>
			<div className={`neu-home__nav-card-title `}>{navItem.label}</div>
		</motion.div>
	);
};
