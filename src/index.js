import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider, ThemeProvider, CategoryProvider, VideosProvider, AuthProvider, LikedVideosProvider, WatchLaterVideosProvider, HistoryProvider,usePlaylist, PlaylistProvider} from "./frontend/contexts";


// Call make Server
makeServer();

ReactDOM.render(

  <BrowserRouter>
     <ThemeProvider>
        <AuthProvider>     
          <SidebarProvider>
            <CategoryProvider>
              <VideosProvider>
                <LikedVideosProvider>
                  <WatchLaterVideosProvider>
                    <HistoryProvider>
                      <PlaylistProvider>
                        <App />
                      </PlaylistProvider>                     
                    </HistoryProvider>
                  </WatchLaterVideosProvider> 
                </LikedVideosProvider>
              </VideosProvider>
            </CategoryProvider>
          </SidebarProvider>     
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);