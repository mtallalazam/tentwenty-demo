const Logo = ({ size = "lg" }) => {
	let width = 190;

	switch (size) {
		case "md":
			width = 120;
			break;
		case "sm":
			width = 90;
			break;
		default:
			width = 190;
	}

	return (
		<svg
			width={width}
			height="65"
			viewBox="0 0 190 65"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M165.238 63.6644H179.524V41.4041H185.238L190 1.33562H175.714L173.333 34.2808H171.905L169.048 1.33562H154.762L159.524 41.4041H165.238V63.6644Z"
				fill="#74BDB1"
			/>
			<path
				d="M116.386 63.6644H131.148L131.814 53.4247H138.576L139.243 63.6644H154.005L146.386 1.33562H124.005L116.386 63.6644ZM132.291 41.8493L134.481 13.8014H135.91L138.1 41.8493H132.291Z"
				fill="#74BDB1"
			/>
			<path
				d="M79.8084 63.6644H94.0941C105.523 63.6644 114.094 55.6507 114.094 32.5C114.094 9.34932 105.523 1.33562 94.0941 1.33562H79.8084V63.6644ZM94.0941 52.9795V12.0205H94.5703C96.9513 12.0205 98.856 13.8014 98.856 32.5C98.856 51.1986 96.9513 52.9795 94.5703 52.9795H94.0941Z"
				fill="#74BDB1"
			/>
			<path
				d="M56.3077 65C65.8315 65 74.4029 56.9863 74.4029 32.5C74.4029 8.0137 65.8315 0 56.3077 0C46.7839 0 38.2124 8.0137 38.2124 32.5C38.2124 56.9863 46.7839 65 56.3077 65ZM56.3077 54.3151C54.8791 54.3151 53.4505 52.8904 53.4505 32.5C53.4505 12.1096 54.8791 10.6849 56.3077 10.6849C57.7362 10.6849 59.1648 12.1096 59.1648 32.5C59.1648 52.8904 57.7362 54.3151 56.3077 54.3151Z"
				fill="#74BDB1"
			/>
			<path
				d="M10.4762 63.6644H24.7619V12.911H35.2381V1.33562H0V12.911H10.4762V63.6644Z"
				fill="#74BDB1"
			/>
		</svg>
	);
};

export default Logo;
