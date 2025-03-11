import "./footer.css";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

export function Footer() {
	return (
		<>
			<div className="video-lib-footer">
				<p className="footer-heading">Digambar Deshawal</p>
				<section className="social-handles">
					<a href="https://github.com/Digambar1411" target="_blank">
						<img src={github} alt="github" />
					</a>

					<a
						href="https://www.linkedin.com/in/digambar-deshawal-9b279b147/"
						target="_blank"
					>
						<img src={linkedin} alt="linkedin" />
					</a>

					<a href="https://twitter.com/deshawald14" target="_blank">
						<img src={twitter} alt="twitter" />
					</a>
				</section>
			</div>
		</>
	);
}
