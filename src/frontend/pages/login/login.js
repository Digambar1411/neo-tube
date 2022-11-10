import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./auth.css";
import { LoginService } from "../../services";

export function Login() {
	const navigate = useNavigate();
	const { dispatchAuth } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const guestLogin = () => {
		setEmail("admin@gmail.com");
		setPassword("123456");
		localStorage.setItem("default_user", true);
	};

	const LoginHandler = async (e) => {
		e.preventDefault();
		const response = await LoginService(email, password);
		if (response.status === 200) {
			localStorage.setItem("auth_token", response.data.encodedToken);
			localStorage.setItem(
				"auth_user",
				JSON.stringify({
					firstName: response.data.foundUser.firstName,
					lastName: response.data.foundUser.lastName,
					email: response.data.foundUser.email,
				})
			);

			dispatchAuth({ type: "LOGIN" });
			navigate("/");
		}
	};

	return (
		<div className="login-card">
			<p className="auth-heading">Sign In</p>
			<form className="flex-col-login" onSubmit={LoginHandler}>
				<div className="input-div">
					<label className="input-label" htmlFor="email">
						EmaiL*
					</label>
					<input
						className="input"
						id="email"
						type="email"
						placeholder="john@edu.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div className="input-div">
					<label className="input-label" htmlFor="password">
						Password*
					</label>
					<input
						className="input"
						id="password"
						placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</div>

				<div className="auth-btns">
					<button className="auth-btn login">Login</button>
					<button className="auth-btn guest-login-btn" onClick={guestLogin}>
						Guest Login
					</button>
				</div>
			</form>

			<div className="auth-controls">
				<span>Dont have account?</span>
				<Link className="auth-control-btn" to="/signup">
					Sign Up
				</Link>
			</div>
		</div>
	);
}
