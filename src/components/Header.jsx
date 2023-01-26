import Logo from "./Logo";
import Button from "./Button";
import BurgerIcon from "./Icons/Burger.icon";
import ThemeToggler from "./ThemeToggler";

const navItems = [
	{
		title: "News",
		url: "/",
	},
	{
		title: "Opinion",
		url: "/",
	},
	{
		title: "Life",
		url: "/",
	},
	{
		title: "Business",
		url: "/",
	},
	{
		title: "Magazine",
		url: "/",
	},
	{
		title: "Newsletter",
		url: "/",
	},
];

const Header = () => {
	return (
		<header>
			<section className="top-container">
				<section className="menu-container">
					<Button
						variant="no-fill"
						icon={
							<BurgerIcon
								width="20"
								className="icon-left"
							/>
						}
					>
						MENU
					</Button>

					<ThemeToggler />
				</section>
				<section className="logo-container">
					<a href="/">
						<Logo
							className="md-hidden"
							size="sm"
						/>
						<Logo
							className="hidden md-block"
							size="lg"
						/>
					</a>
				</section>
			</section>

			<nav className="hidden md-block">
				<ul>
					{navItems.map((item, index) => (
						<li key={`footer-navItem-${index}`}>
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
export default Header;
