import ReactPlayer from 'react-player/youtube'
import { useParams} from "react-router-dom"
import { Navbar, Footer, SmallHorizontalVideoCard } from '../../components';
import "./video-listing.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

export function VideoListing(){
      const { id } = useParams();
    const [selectedVideo, setSelectedVideo] = useState([]);
    const [suggestionVideos, setSuggestionVideos] = useState([]);
   
    useEffect(()=>{
        const getSingleVideo = async ()=>{
            const response =  await axios.get(`/api/video/${id}`)
            setSelectedVideo(response.data.video);
        }
        getSingleVideo();
            
    },[id])

    useEffect(()=>{
        const getSuggestionVideos = async()=>{
            const response = await axios.get("/api/videos")
            setSuggestionVideos(response.data.videos.filter(video=>video._id!==id && video.creator===selectedVideo.creator))
        }
        getSuggestionVideos();

    },[selectedVideo, suggestionVideos])

    return(
        <>
            <Navbar />
            <div className='main-body'>
            <div className='single-video-page'>
                <div className="player">
                    <ReactPlayer 
                        className="ReactPlayer"
                        url={`https://www.youtube.com/watch?v=${id}`}
                        controls={true}
                    />
                    <div className='video-details flex-col'>
                        <section className='video-title'>India's Worst Plane Crash | Only Mid-Air Collision in History | Dhruv Rathee</section>

                        <section className='dynamic-section flex-row'>
                            <div className='center dynamic-menu'>
                                <span className="material-icons-outlined md-20">
                                    thumb_up
                                    </span>
                                <span className='mg-left-4px'>Like</span>
                            </div>

                            <div className='center dynamic-menu'>
                                <span className="material-icons-outlined md-20">
                                    watch_later
                                </span>
                                <span className='mg-left-4px'>Watch later</span>
                            </div>

                            <div className='center dynamic-menu'>
                                <span className="material-icons-outlined md-20">
                                    playlist_play
                                </span>
                                <span className='mg-left-4px'>Add to Playlist</span>
                            </div>                 
                        </section>
                        <section className='video-description'><strong>Description :</strong>
                            This BONUS video covers the fundamentals of setTimeout, how it works behind the scenes. We also discover that setTimeout does not guarantee that the callback method will be executed exactly after a certain delay. Hence, there are trust issues with setTimeout.
                        </section>

                    </div>
                    
                </div>

                <div className='suggested-videos-container flex-col'>
                    <div>videos you may like..</div>
                    { suggestionVideos && suggestionVideos.map(video =>
                       <SmallHorizontalVideoCard key={video._id} video={video}/>
                    )}
                        
                </div> 
            </div>
            </div>
            <Footer />
        </>
        
    )
}