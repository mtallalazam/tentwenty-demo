import { useState, useEffect } from "react";

import IconButton from "./IconButton";
import MoonIcon from "./Icons/Moon.icon";
const ThemeToggler = () => {
	const [darkTheme, toggleTheme] = useState(false);

	const handleToggleTheme = (state) => {
		if (state) {
			document.body.classList.add("dark-mode");
			document.body.classList.remove("light-mode");
		} else {
			document.body.classList.add("light-mode");
			document.body.classList.remove("dark-mode");
		}

		localStorage.setItem("darkMode", JSON.stringify(state));
		toggleTheme(state);
	};

	useEffect(() => {
		const localStorageThemeKey = "darkMode";
		const localStorageTheme = localStorage.getItem(localStorageThemeKey);
		const localStorageKeyExists = localStorageTheme !== null;
		if (localStorageKeyExists) {
			toggleTheme(JSON.parse(localStorageTheme));
		}
	}, []);

	return (
		<IconButton
			variant="no-fill"
			icon={<MoonIcon />}
			onClick={() => handleToggleTheme(!darkTheme)}
		/>
	);
};

export default ThemeToggler;
