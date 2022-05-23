import React, { useEffect, useState } from "react";
import "./NeuLoadderRound.scss";
import classNames from "classnames";
type NeuLoadderRoundProps = {
	roundNumber: number;
};

export const NeuLoadderRound = ({ roundNumber = 3 }: NeuLoadderRoundProps) => {
	const [roundArray, setroundArray] = useState<number[]>([]);
	useEffect(() => {
		setroundArray(Array.from(Array(roundNumber), (e, i) => i + 1));
	}, [roundNumber]);
	return (
		<div className="neu-loader-round__warrper">
			<div className="neu-loader-round__warrper--inner">
				{roundArray.map((item) => {
					return (
						<div
							className={classNames(
								"neu-loader-round__ring",
								`neu-loader-round__ring--${item}`
							)}
							style={{
								width: `calc(((100% / ${roundNumber}) * ${item}) - 1rem)`,
								height: `calc(((100% / ${roundNumber})  * ${item}) - 1rem )`,
								zIndex: roundNumber - item,
								animationDelay: `${1 * item}s`,
								animationDuration: `${roundNumber}s`,
							}}
						></div>
					);
				})}
			</div>
		</div>
	);
};
