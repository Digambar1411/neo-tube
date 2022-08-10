import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider, ThemeProvider, CategoryProvider, VideosProvider} from "./frontend/contexts/index.js";

// Call make Server
makeServer();

ReactDOM.render(

    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <CategoryProvider>
            <VideosProvider>
              <App />
            </VideosProvider>
          </CategoryProvider>
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>,
  document.getElementById("root")
);