import Moment from 'react-moment';
import "./smallVideoCard.css";

const SmallVideoCard =({video})=>{

    const { _id, title, views, channel, channelProfile, uploadedAt} = video;
    return(
        <>
            <div className="video-card flex-col">
                <div className="card-image">
                    <img className="thumbnail-img" src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} />
                </div>
                <section className="video-info-container">

                    <div>
                        <img className="owner-profile" src={`https://yt3.ggpht.com/${channelProfile}`}/>
                    </div>

                    <div className="video-details">
                        <div className="title">{title}</div>
                        <section className="sub-details">
                            <div className="owner-name">{channel}</div>
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

                    <div>
                        <span className="material-icons-outlined">
                            more_vert
                        </span>
                    </div>

                </section>
            </div>
    </>
    )
    
}

export { SmallVideoCard }