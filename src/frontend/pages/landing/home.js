import { Footer, Navbar, Sidebar, SmallVideoCard, CategoryContainer} from "../../components/index";
import "./home.css";
import { useVideos, useCategory } from "../../contexts";

export function Home(){
    
    const { videos } = useVideos();
    const {state:{category} }= useCategory();

    const getFilteredVideos=(category, videos)=>{
        if(category==="All")
            return videos
        else return videos.filter(video=>video.categoryName===category)
    }
 
    const finalVideos = getFilteredVideos(category, videos);

    return(
        <div>
            <Navbar />
            <div className="landing-page">

                <Sidebar />

                <main className="main-section">

                    <CategoryContainer />
                                        
                    <div className="main-cards-container">
                        { finalVideos && 
                            finalVideos.map(video=><SmallVideoCard key={video._id} video={video}/>)
                        }
                    </div>
                </main>
            </div>

            <Footer />

        </div>
    
    )
}