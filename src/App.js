// import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Home, LikedVideos, WatchLater, Login, Signup, VideoListing, History} from "../src/frontend/pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/liked-videos" element={<LikedVideos />}/>
        <Route path="/watch-later" element={<WatchLater />}/>
        <Route path="/video" element={<VideoListing />}/>
        <Route path="/history" element={<History />}/>
      </Routes>
    </div>
  );
}

export default App;

