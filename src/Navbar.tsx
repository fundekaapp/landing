import "./Navbar.css";
import Ctabutton from "./components/Ctabutton";
import GlassSurface from './components/GlassSurface'

function Navbar() {
	return (
		<GlassSurface
			borderRadius={24}
			width={"90%"}
			style={{ position: "fixed", top: "20px", zIndex: 1000, left: "50%", transform: "translateX(-50%)" }}
		>
			<nav className="navbar">
				<div className="navbar-logo">
					<a href="/">FUNDEKA</a>
				</div>
				<ul className="navbar-links">
					<li className="link">
						<a href="#features">Features</a>
					</li>
					<li className="link">
						<a href="#pricing">Pricing</a>
					</li>
					<li className="link">
						<a href="#contact">Contact</a>
					</li>
					<li>
						<Ctabutton title={"Signup"} link={"facebook.com"} />
					</li>
				</ul>
			</nav>
		</GlassSurface>
	);
}

export default Navbar;
