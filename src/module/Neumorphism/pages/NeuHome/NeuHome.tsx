import React from "react";
import "./NeuHome.scss";
import Typewriter from "typewriter-effect";
import { IconPhoenix } from "../../../../icons/Phoenix";
import { NAVIGATION_ITEM } from "../../../../utils/NavArray";
import { motion } from "framer-motion";
import { neuContainer } from "../../../../themes/motionVariants";
import { NeuNavigationCard } from "../../components/NeuNavigationCard/NeuNavigationCard";
type NeuHomeProps = {};

export const NeuHome = (props: NeuHomeProps) => {
	return (
		<div className="neu-home__warrper">
			<div className="neu-home__warrper--left">
				<div className="neu-home__text u__text--medium">
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
					<span className="neu-home-square">
						<IconPhoenix />
					</span>
				</div>
			</div>
			<motion.div
				variants={neuContainer}
				initial="initial"
				animate="animate"
				exit="exit"
				className="neu-home__warrper--right"
			>
				{NAVIGATION_ITEM.map((navItem, index) => {
					return (
						<NeuNavigationCard
							key={navItem.path}
							navItem={navItem}
							index={index}
						/>
					);
				})}
			</motion.div>
		</div>
	);
};
