import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { GlassHome } from "../../module/Glassmorphism";
import { NeuHome } from "../../module/Neumorphism";

type HomeProps = {};

export const Home = (props: HomeProps) => {
	const theme = useContext(ThemeContext);
	const [element, setElement] = useState<React.ReactNode>(<div />);
	useEffect(() => {
		switch (theme?.key) {
			case "glass":
				setElement(<GlassHome />);
				break;
			case "neu":
				setElement(<NeuHome />);
				break;
			default:
				setElement(<GlassHome />);
				break;
		}
	}, [theme]);

	return <div className="home__warpper u__page">{element}</div>;
};
