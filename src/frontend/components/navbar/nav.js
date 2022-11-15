import "./nav.css";
import { useSidebar, useTheme, useAuth } from "../../contexts/index";
import { Link, useNavigate } from "react-router-dom";
import brand from "../../assets/brand1.png";

export function Navbar() {
	const { showSidebar } = useSidebar();
	const { toggleTheme, theme } = useTheme();
	const {
		stateAuth: {
			isLoggedIn,
			defaultUser,
			user: { firstName },
		},
	} = useAuth();
	const navigate = useNavigate();
	const firstLater = firstName?.slice(0, 1);

	return (
		<>
			<div className="default-navigation">
				<nav className="nav flex-sp-btwn ">
					<section className="pd-left center">
						<div className="menu center">
							<span
								className="material-icons-outlined menu-icon"
								onClick={showSidebar}
							>
								menu
							</span>
						</div>
						<div className="brand ml-10 center" onClick={() => navigate("/")}>
							<img src={brand} />
							NeoTube
						</div>
					</section>

					<section className="search-section">
						<div className="search">
							<input
								className="search-input pd-right"
								type="search"
								placeholder="search"
							/>
							<span className="material-icons-outlined search-icon">
								search
							</span>
						</div>
					</section>

					<section className="flex-sp-btwn gap-1rem pd-right center">
						{theme == "light" ? (
							<span className="material-icons fs-36" onClick={toggleTheme}>
								dark_mode
							</span>
						) : (
							<span className="material-icons fs-32" onClick={toggleTheme}>
								light_mode
							</span>
						)}

						{isLoggedIn ? (
							defaultUser ? (
								<img
									onClick={() => navigate("/user-profile")}
									className="rounded-avatar profile"
									src="https://i.pravatar.cc/200?img=4"
									alt="profile"
								/>
							) : (
								<div
									onClick={() => navigate("/user-profile")}
									className="text-circle profile"
								>
									<span className="text fs-20">{firstLater}</span>
								</div>
							)
						) : (
							<>
								<Link to="/login" className="control-btn">
									Sign In
								</Link>
								<button
									className="control-btn"
									onClick={() => navigate("/signup")}
								>
									Sign Up
								</button>
							</>
						)}
					</section>
				</nav>
			</div>

			<div className="mobile-navigation">
				<nav className="nav flex-sp-btwn ">
					<section className="center pl-10">
						<div className="mobile-menu center">
							<span
								className="material-icons-outlined menu-icon"
								onClick={showSidebar}
							>
								menu
							</span>
						</div>
						<div className="mobile-brand center" onClick={() => navigate("/")}>
							<img className="brand-logo" src={brand} />
							NeoTube
						</div>
					</section>

					<section className="flex-sp-btwn gap-10 pd-right center">
						<div className="theme">
						{theme == "light" ? (
							<span className="material-icons fs-34" onClick={toggleTheme}>
								dark_mode
							</span>
						) : (
							<span className="material-icons fs-30" onClick={toggleTheme}>
								light_mode
							</span>
						)}
						</div>

						{isLoggedIn ? (
							defaultUser ? (
								<img
									onClick={() => navigate("/user-profile")}
									className="mobile-rounded-avatar profile"
									src="https://i.pravatar.cc/200?img=4"
									alt="profile"
								/>
							) : (
								<div
									onClick={() => navigate("/user-profile")}
									className="text-circle profile"
								>
									<span className="text fs-20">{firstLater}</span>
								</div>
							)
						) : (
							<>
								<Link to="/login" className="control-btn">
									Sign In
								</Link>
								<button
									className="control-btn auth-signup-btn"
									onClick={() => navigate("/signup")}
								>
									Sign Up
								</button>
							</>
						)}
					</section>
				</nav>
			</div>
		</>
	);
}
