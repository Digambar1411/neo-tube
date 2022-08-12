// import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Home, LikedVideos, WatchLater, Login, Signup, VideoListing, History, Playlist, UserProfle} from "../src/frontend/pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/liked-videos" element={<LikedVideos />}/>
        <Route path="/watch-later" element={<WatchLater />}/>
        <Route path="/video-listing/:id" element={<VideoListing />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/play-list" element={<Playlist />}/>
        <Route path="/user-profile" element={<UserProfle />} />
      </Routes>
    </div>
  );
}

export default App;
