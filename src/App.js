// import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import {
	Home,
	LikedVideos,
	WatchLater,
	Login,
	Signup,
	VideoListing,
	History,
	Playlist,
	UserProfle,
	PlaylistDetails,
} from "../src/frontend/pages/index";
import {
	PrivateRoutes,
	Navbar,
	Sidebar,
	CategoryBar,
	Footer,
} from "./frontend/components";

function App() {
	const { pathname } = useLocation();

	// return (
	// 	<div className="App">
	// 		<Navbar />

	// 		{pathname === "/" && (
	// 			<div className="landing-page">
	// 				<Sidebar />
	// 				<main className="main-section">
	// 					<CategoryBar />
	// 					<div>
	// 						<Routes>
	// 							<Route path="/" element={<Home />} />
	// 						</Routes>
	// 					</div>
	// 				</main>
	// 			</div>
	// 		)}

	// 		{(pathname !== "/login" ||
	// 			pathname !== "/signup" ||
	// 			pathname !== "/") && (
	// 			<div className="main-body-page">
	// 				<div className="sidebar-container">
	// 					<Sidebar />
	// 				</div>
	// 				<div className="cards-container">
	// 					<Routes>
	// 						<Route path="/video-listing/:id" element={<VideoListing />} />
	// 						<Route
	// 							path="/play-list/:playlistId"
	// 							element={<PlaylistDetails />}
	// 						/>
	// 						<Route
	// 							path="/liked-videos"
	// 							element={
	// 								<PrivateRoutes>
	// 									<LikedVideos />
	// 								</PrivateRoutes>
	// 							}
	// 						/>

	// 						<Route
	// 							path="/watch-later"
	// 							element={
	// 								<PrivateRoutes>
	// 									<WatchLater />
	// 								</PrivateRoutes>
	// 							}
	// 						/>

	// 						<Route
	// 							path="/history"
	// 							element={
	// 								<PrivateRoutes>
	// 									<History />
	// 								</PrivateRoutes>
	// 							}
	// 						/>

	// 						<Route
	// 							path="/play-list"
	// 							element={
	// 								<PrivateRoutes>
	// 									<Playlist />
	// 								</PrivateRoutes>
	// 							}
	// 						/>

	// 						<Route
	// 							path="/user-profile"
	// 							element={
	// 								<PrivateRoutes>
	// 									<UserProfle />
	// 								</PrivateRoutes>
	// 							}
	// 						/>
	// 					</Routes>
	// 				</div>
	// 			</div>
	// 		)}

	// 		{pathname === "/login" && (
	// 			<div className="login-page">
	// 				<Routes>
	// 					<Route path="/login" element={<Login />} />
	// 				</Routes>
	// 			</div>
	// 		)}

	// 		{pathname === "/signup" && (
	// 			<div className="login-page">
	// 				<Routes>
	// 					<Route path="/signup" element={<Signup />} />
	// 				</Routes>
	// 			</div>
	// 		)}
	// 	</div>
	// );

	return (
		<div className="App">
			<Navbar />
			{pathname === "/" ? (
				<div className="landing-page">
					<Sidebar />
					<main className="main-section">
						<CategoryBar />
						<div>
							<Routes>
								<Route path="/" element={<Home />} />
							</Routes>
						</div>
					</main>
				</div>
			) : (
				<>
					{pathname === "/login" || pathname === "/signup" ? (
						<div className="login-page">
							<Routes>
								<Route path="/login" element={<Login />} />
							</Routes>
						</div>
					) : (
						<div className="main-body-page">
							{/* <div className="sidebar-container"> */}
								<Sidebar />
							{/* </div> */}
							<div className="cards-container">
								<Routes>
									<Route path="/video-listing/:id" element={<VideoListing />} />
									<Route
										path="/play-list/:playlistId"
										element={<PlaylistDetails />}
									/>
									<Route
										path="/liked-videos"
										element={
											<PrivateRoutes>
												<LikedVideos />
											</PrivateRoutes>
										}
									/>

									<Route
										path="/watch-later"
										element={
											<PrivateRoutes>
												<WatchLater />
											</PrivateRoutes>
										}
									/>

									<Route
										path="/history"
										element={
											<PrivateRoutes>
												<History />
											</PrivateRoutes>
										}
									/>

									<Route
										path="/play-list"
										element={
											<PrivateRoutes>
												<Playlist />
											</PrivateRoutes>
										}
									/>

									<Route
										path="/user-profile"
										element={
											<PrivateRoutes>
												<UserProfle />
											</PrivateRoutes>
										}
									/>
								</Routes>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
}

export default App;
