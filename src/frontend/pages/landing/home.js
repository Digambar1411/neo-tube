import { Footer, Navbar, Sidebar, SmallVideoCard} from "../../components/index";
import "./home.css";
import { useCategory, useVideos } from "../../contexts";


export function Home(){
    const { videos } = useVideos();
    const { categories } = useCategory();
  
    return(
        <>
            <Navbar />
            <div className="landing-page">

                <Sidebar />
                        
                <main className="main-section">
                    <div className="main-header">
                        {categories && categories.map(({categoryName})=><button className="category-btn">{categoryName}</button>)}
                        
                    </div>
                    
                    <div className="main-cards-container">
                        { videos && videos.map(video=>
                        <SmallVideoCard key={video._id} video={video}/>
                        )}
                        
                    </div>
                </main>
            </div>

            <Footer />
    
        </>
    )
}