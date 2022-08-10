import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";

export const SmallHorizontalVideoCard =({video})=>{
    const navigate = useNavigate();
    return(
        <>
            <div className='sm-hz-video-card flex-row' onClick={()=>navigate(`/video-listing/${video._id}`)}>
                <img className='sm-card-thumbnail' src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}/>
                <div className='sm-card-video-details flex-col mg-left-8px'>
                    <div className="sm-card-title">{video.title}</div>
                    <div className='sm-card-creator light-font'>{video.creator}</div>
                    <div className='flex-row'>
                        <section className='views sm-card-views light-font'>{video.views} views</section>
                        <section className="mg-left-4px sm-card-uploadedTime light-font"><Moment fromNow >{video.uploadedAt}</Moment></section>
                    </div>
                </div>
            </div>
        </>
    )

}