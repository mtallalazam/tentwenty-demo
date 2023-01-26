const navItems = [
	{
		title: "Magazine",
		url: "/",
	},
	{
		title: "Contact",
		url: "/",
	},
	{
		title: "About",
		url: "/",
	},
	{
		title: "Press",
		url: "/",
	},
	{
		title: "Sitemap",
		url: "/",
	},
	{
		title: "TS + CS",
		url: "/",
	},
];

const Footer = () => {
	return (
		<footer>
			<nav>
				<ul>
					{navItems.map((item, index) => (
						<li key={`footer-navItem-${index}`}>
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	);
};
export default Footer;
