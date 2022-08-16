// import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Home, LikedVideos, WatchLater, Login, Signup, VideoListing, History, Playlist, UserProfle, PlaylistDetails} from "../src/frontend/pages/index";
import { PrivateRoutes} from "./frontend/components"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/video-listing/:id" element={<VideoListing />}/>
        <Route path="/play-list/:playlistId"  element={<PlaylistDetails />}/>
        <Route path="/liked-videos" 
          element={
            <PrivateRoutes >
              <LikedVideos /> 
            </PrivateRoutes>
          }
        />

        <Route path="/watch-later" 
          element={
            <PrivateRoutes >
              <WatchLater />
            </PrivateRoutes>
          }
        />

        <Route path="/history" 
          element={
            <PrivateRoutes >
              <History />
            </PrivateRoutes>
          }
        />

        <Route path="/play-list" 
          element={
            <PrivateRoutes >
                <Playlist />
            </PrivateRoutes>
          }
        />
        
        <Route path="/user-profile" 
          element={
            <PrivateRoutes >
                <UserProfle />
            </PrivateRoutes>
          } 
        />

      </Routes>
    </div>
  );
}

export default App;
