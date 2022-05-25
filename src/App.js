import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Home, LikedVideos, WatchLater, Login, Signup, VideoListing} from "../src/frontend/pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/LV" element={<LikedVideos />}/>
        <Route path="/WL" element={<WatchLater />}/>
        <Route path="/video" element={<VideoListing />}/>
      </Routes>
     
    </div>
  );
}

export default App;

