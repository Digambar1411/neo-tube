import "./nav.css";
import { useSidebar, useTheme , useAuth} from "../../contexts/index";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
    const { showSidebar } = useSidebar();
    const { toggleTheme, theme } = useTheme();
    const { stateAuth :{isLoggedIn}} = useAuth();
    const navigate = useNavigate();

    return(
    <>
        <nav className="nav flex-sp-btwn ">
            <section className="flex-sp-btwn gap-1rem pd-left center">
                <div className="menu center">
                    <span className="material-icons-outlined menu-icon" onClick={showSidebar}>
                        menu
                    </span>
                </div>
                <div className="brand" onClick={()=>navigate("/")}>NeoTube</div>
            </section>

            <section className="search-section">
                <div className="search">
                    <input className="search-input pd-right" type="search" placeholder="search"/>
                    <span className="material-icons-outlined search-icon">
                        search
                    </span>
                </div>
            </section>
            
                <section className="flex-sp-btwn gap-1rem pd-right center">
                { 
                    theme=="light" ?    
                        <span className="material-icons md-36" onClick={toggleTheme}>
                            dark_mode
                        </span> :
                        <span className="material-icons-outlined md-30" onClick={toggleTheme}>
                            light_mode
                        </span> 
                }

                   { isLoggedIn ? 
                    <span className="material-icons-outlined md-36 profile" onClick={()=>navigate("/user-profile")}>
                        person
                    </span> :  
                    <>
                        <Link to="/login" className="control-btn">Login</Link>
                        <button className="control-btn" onClick={()=>navigate("/signup")}>sign up</button>
                    </>
                  
                    }
                </section>  
             
        </nav>
    </>
    )
}