import { Footer, Navbar, Sidebar} from "../../components/index";
import { useSidebar } from "../../contexts/index";
import "./home.css";

export function Home(){

    const { sidebar } = useSidebar();

    return(
        <>
            <Navbar />
            <div className="landing-page">

                <Sidebar />
                        
                <main className="main-section">
                    <div className="main-header">
                        <button className="category-btn">All</button>
                        <button className="category-btn">fitness</button>
                        <button className="category-btn">social awarness</button>
                        <button className="category-btn">law</button>
                        <button className="category-btn">javascript</button>
                        <button className="category-btn">tech</button>
                        <button className="category-btn">social awarness</button>
                        <button className="category-btn">law</button>
                        <button className="category-btn">tech</button>
                    </div>
                    
                    <div className="main-cards-container">
                    
                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">hitesh</div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>

                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">hitesh</div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">hitesh</div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">hitesh</div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">hitesh</div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">hitesh</div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">hitesh</div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                        <div className="video-card flex-col">
                            <div className="card-image"></div>
                            <section className="video-info-container">

                                <div className="owner-profile">
                                    <span className="material-icons-outlined md-36">
                                        person
                                    </span>
                                </div>

                                <div className="video-details">
                                    <div className="title">Understand how Scaler has helped thousands of alumni</div>
                                    <section className="sub-details">
                                        <div className="owner-name">Dhruv Rathe
                                            <span className="material-icons md-13">
                                                check_circle
                                            </span>
                                        </div>
                                        <section className="other-details">
                                            <div className="views">1.6M views</div>
                                            <div className="validity">22 hours ago</div>
                                        </section>
                                    </section>
                                </div>

                                <div>
                                    <span className="material-icons-outlined">
                                        more_vert
                                    </span>
                                </div>
                                
                            </section>
                        </div>

                    </div>
                </main>
            </div>

            <Footer />
    
        </>
    )
}