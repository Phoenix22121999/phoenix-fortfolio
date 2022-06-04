import React from "react";
import "./NeuAvatar.scss";
import avartar from "../../../../assets/images/phoenix.jpg";
type NeuAvatarProps = {};

export const NeuAvatar = (props: NeuAvatarProps) => {
	return (
		<div className="avatar__warpper">
			<div className="avatar__warpper-inner">
				<div className="avatar__inner">
					<img src={avartar} alt="" />
					<div
						className="avatar__wave"
						style={{ animationDelay: "0s" }}
					></div>
					<div
						className="avatar__wave"
						style={{ animationDelay: "0.5s" }}
					></div>
					<div
						className="avatar__wave"
						style={{ animationDelay: "1s" }}
					></div>
					<div
						className="avatar__wave"
						style={{ animationDelay: "1.5s" }}
					></div>
					<div
						className="avatar__wave"
						style={{ animationDelay: "2s" }}
					></div>
				</div>
			</div>
		</div>
	);
};
