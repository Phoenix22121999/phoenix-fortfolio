import React from "react";
import {
	NeuAvatar,
	LoaderColumn,
	NeumorphismBlock,
} from "../../module/Neumorphism";
import "./PersonalInformation.scss";
import Typewriter from "typewriter-effect";
type PersonalInformationProps = {};
export const PersonalInformation = (props: PersonalInformationProps) => {
	return (
		<div className="pi__warpper">
			<div className="pi__warpper--inner">
				<div className="pi__section pi__section--left">
					<div className="pi__left">
						<NeumorphismBlock />
					</div>
					<div className="pi__right">
						<div className="pi__loadder">
							<LoaderColumn columnNumber={3} />
						</div>
						<div className="pi__typewriter ">
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString(
											`<span class="u__title--large"> Hello  </span>`
										)
										.pauseFor(2000)
										.typeString(
											`<span class="u__text--small"> <br /> My name is Nguyen Huu Tan Dat. </span>`
										)
										.pauseFor(1000)
										.typeString(
											`<span class="u__text--small"> <br /> but I like the nickname Phoenix </span>`
										)
										.pauseFor(1000)
										.typeString(
											`<span class="u__text--small"> <br /> I'm a software engineer </span>`
										)
										.start();
								}}
							/>
						</div>
					</div>
				</div>
				<div className="pi__section pi__section--right">
					<NeuAvatar />
				</div>
			</div>
		</div>
	);
};
