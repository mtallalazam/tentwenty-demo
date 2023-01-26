import Logo from "./Logo";
import Button from "./Button";
import BurgerIcon from "./Icons/Burger.icon";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
	return (
		<header>
			<section className="top-container">
				<section className="menu-container">
					<Button
						variant="no-fill"
						icon={<BurgerIcon width="20" />}
					>
						MENU
					</Button>

					<ThemeToggler />
				</section>
				<section className="logo-container">
					<Logo size="sm" />
				</section>
			</section>
		</header>
	);
};
export default Header;
