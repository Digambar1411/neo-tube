import Moment from 'react-moment';
import { useState } from 'react';
import { useNavigate} from "react-router-dom"
import "./smallVideoCard.css";

const SmallVideoCard =({video})=>{

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const toggleModal=()=>{
        setShowModal((showModal)=>!showModal)
    }
    
    const { _id, title, views, creator, channelProfile, uploadedAt, thumbnail} = video;
    return(
        <>
            <div className="video-card flex-col">
                <div className="card-image" onClick={()=>navigate(`/video-listing/${_id}`)}>
                    <img className="thumbnail-img" src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} />
                </div>

                <section className="video-info-container">
                    <div>
                        <img className="owner-profile" src={`https://yt3.ggpht.com/${channelProfile}`}/>
                    </div>

                    <div className="video-details">
                        <div className="title">{title}</div>
                        <section className="sub-details">
                            <div className="owner-name">{creator}</div>
                            <section className="other-details">
                                <div className="views">{views} views</div>
                                <div className="validity">
                                    <span className="material-icons separator">
                                        fiber_manual_record
                                    </span>
                                    <Moment fromNow>{uploadedAt}</Moment>
                                </div>
                            </section>
                        </section>
                    </div>

                    { showModal && 
                        <div className="modal">
                            <div className="menu-item">
                                <span className="material-icons-outlined md-28">
                                    watch_later
                                </span>
                                <div>Save to watch later</div>
                            </div>
                        </div>  
                    }

                    <span className="material-icons-outlined" onClick={toggleModal}>
                        more_vert
                    </span>

                </section>
            </div>
        </>
    )
    
}

export { SmallVideoCard }