const Button = ({ children, variant = "default", className = "", icon = null, iconRight = false, ...rest }) => {
	let classes = "button";

	if (variant === "no-fill") {
		classes += " no-fill";
	}

	return (
		<button
			className={classes + " " + className}
			{...rest}
		>
			{!iconRight && icon}
			{children}
			{iconRight && icon}
		</button>
	);
};

export default Button;
