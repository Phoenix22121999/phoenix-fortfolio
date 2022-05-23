import React, { useEffect, useState } from "react";
import "./LoaderColumn.scss";
type LoaderColumnProps = {
	columnNumber: number;
};

export const LoaderColumn = React.memo(
	({ columnNumber = 1 }: LoaderColumnProps) => {
		const [columnArray, setColumnArray] = useState<number[]>([]);
		useEffect(() => {
			setColumnArray(Array.from(Array(columnNumber), (e, i) => i + 1));
		}, [columnNumber]);

		return (
			<div className="neu-loader__warpper">
				{columnArray.map((item) => {
					return (
						<div className="neu-loader__column">
							<div
								className="neu-loader__node"
								style={{ animationDelay: `${-0.5 * item}s` }}
							/>
						</div>
					);
				})}
			</div>
		);
	}
);
