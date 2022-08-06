import { Footer, Navbar, Sidebar, SmallVideoCard, CategoryContainer} from "../../components/index";
import "./home.css";
import { useVideos } from "../../contexts";


export function Home(){
    const { videos } = useVideos();
    
    return(
        <>
            <Navbar />
            <div className="landing-page">

                <Sidebar />
                        
                <main className="main-section">

                    <CategoryContainer />
                                        
                    <div className="main-cards-container">
                        { videos && 
                            videos.map(video=><SmallVideoCard key={video._id} video={video}/>)
                        }
                    </div>
                </main>
            </div>

            <Footer />
    
        </>
    )
}