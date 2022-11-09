import "./footer.css";
import { Link } from "react-router-dom";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

export function Footer() {
	return (
		<>
			<div className="video-lib-footer">
				<p className="footer-heading">Digambar Deshawal</p>
				<section className="social-handles">
					<Link to="https://github.com/Digambar1411">
                        <img src={github} alt="github" />
					</Link>

					<Link to="https://www.linkedin.com/in/digambar-deshawal-9b279b147/">						
                        <img src={linkedin} alt="linkedin" />
					</Link>

					<Link to="https://twitter.com/deshawald14">
                        <img src={twitter} alt="twitter" />
					</Link>
				</section>
			</div>
		</>
	);
}
