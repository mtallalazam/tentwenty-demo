import Button from "./Button";
const IconButton = ({ icon, ...rest }) => {
	return (
		<Button
			className="icon-button"
			{...rest}
		>
			{icon}
		</Button>
	);
};

export default IconButton;
