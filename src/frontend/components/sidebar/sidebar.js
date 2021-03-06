import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useSidebar} from "../../contexts/index";

export function Sidebar() {
 const { sidebar }= useSidebar()

 const sidebarMenuClass = ({ isActive }) =>
 isActive ? "side-bar-menu active-link" : "side-bar-menu";
    return(
    <>
        <div className={sidebar ? "side-bar active": "side-bar"}>
            <NavLink to="/" className={sidebarMenuClass}>
                <span className="material-icons-outlined md-28">
                    home
                </span>
                <div className="menu-text"> Home</div>
    
            </NavLink>

            <NavLink to="/watch-later" className={sidebarMenuClass}>
                <span className="material-icons-outlined md-28">
                    explore
                </span>
                <div className="menu-text"> Exlpore</div>
            </NavLink>

            <NavLink to="/liked-videos" className={sidebarMenuClass}>
                <span className="material-icons-outlined md-28">
                    thumb_up
                </span>
                <div className="menu-text"> Liked Videos</div>
            </NavLink>

            <NavLink to="/watch-later" className={sidebarMenuClass}>
                <span className="material-icons-outlined md-28">
                    watch_later
                </span>
               <div className="menu-text">Watch Later</div>
            </NavLink>

            <NavLink to="/watch-later" className={sidebarMenuClass}>
                <span className="material-icons-outlined md-28">
                    history
                </span>
                <div className="menu-text">History</div>
            </NavLink>

            <NavLink to="/watch-later" className={sidebarMenuClass}>
                <span className="material-icons-outlined md-28">
                    settings
                </span>
                <div className="menu-text">Settings</div>
            </NavLink>
        </div>

    </>
    )
}