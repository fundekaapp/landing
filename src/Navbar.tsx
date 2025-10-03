import "./Navbar.css";
import Ctabutton from "./components/Ctabutton";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<a href="/">Fundeka</a>
			</div>
			<ul className="navbar-links">
				<li>
					<a href="#features">Features</a>
				</li>
				<li>
					<a href="#pricing">Pricing</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
				<li>
					<Ctabutton title={"Signup"} link={"facebook.com"} />
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
