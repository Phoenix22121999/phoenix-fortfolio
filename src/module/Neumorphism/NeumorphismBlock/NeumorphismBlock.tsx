import React from "react";
import "./NeumorphismBlock.scss";
type NeumorphismBlockProps = {};

export const NeumorphismBlock = (props: NeumorphismBlockProps) => {
	return (
		<div className="neu-block__warpper">
			<div className="neu-block__leave" />
			<div className="neu-block__crescent" />
			<div className="neu-block__round" />
			<div className="neu-block__square" />
		</div>
	);
};
