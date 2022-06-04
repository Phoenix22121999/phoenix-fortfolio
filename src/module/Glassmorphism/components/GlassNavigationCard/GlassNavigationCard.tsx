import React from "react";
import { motion } from "framer-motion";
import { glassItem } from "../../../../themes/motionVariants";
import classNames from "classnames";
import { NavigationItem } from "../../../../types/types";
import "./GlassNavigationCard.scss";
import { useNavigate } from "react-router-dom";

type GlassNavigationCardProps = {
	index: number;
	navItem: NavigationItem;
};

export const GlassNavigationCard = ({
	index,
	navItem,
}: GlassNavigationCardProps) => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate(navItem.path);
	};
	return (
		<motion.div
			variants={glassItem}
			className="glass-home__nav-card-warpper"
			style={{ animationDelay: `${index * 0.5 + 2}s` }}
			onClick={onClick}
		>
			<div
				className={classNames(
					"glass-home__nav-card",
					`glass-home__nav-card--${index}`
				)}
			>
				<div className="glass-home__nav-card-icon">{navItem.icon}</div>
			</div>
			<div
				className={`glass-home__nav-card-title glass-home__nav-card-title--color-${index}`}
			>
				{navItem.label}
			</div>
		</motion.div>
	);
};
