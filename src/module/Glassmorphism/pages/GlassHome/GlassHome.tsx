import React from "react";
import "./GlassHome.scss";
import Typewriter from "typewriter-effect";
import { IconPhoenix } from "../../../../icons/Phoenix";
import { NAVIGATION_ITEM } from "../../../../utils/NavArray";
import { motion } from "framer-motion";
import { glassContainer } from "../../../../themes/motionVariants";
import { GlassNavigationCard } from "../../components/GlassNavigationCard/GlassNavigationCard";
type GlassHomeProps = {};

export const GlassHome = (props: GlassHomeProps) => {
	return (
		<div className="glass-home__warrper">
			<div className="glass-home__warrper--left">
				<div className="glass-home__text u__text--medium">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.pauseFor(3500)
								.typeString(
									`<span class="u__title--large"> Hello  </span>`
								)
								.pauseFor(2000)
								.typeString(
									`<br /> My name is Nguyen Huu Tan Dat. `
								)
								.pauseFor(1000)
								.typeString(
									`<br /> but I like the nickname Phoenix `
								)
								.pauseFor(1000)
								.typeString(`<br /> I'm a software engineer `)
								.start();
						}}
					/>
					<span className="glass-home-square">
						<IconPhoenix />
					</span>
				</div>
			</div>
			<motion.div
				variants={glassContainer}
				initial="initial"
				animate="animate"
				exit="exit"
				className="glass-home__warrper--right"
			>
				{NAVIGATION_ITEM.map((navItem, index) => {
					return (
						<GlassNavigationCard
							key={index}
							navItem={navItem}
							index={index}
						/>
					);
				})}
			</motion.div>
		</div>
	);
};
