import './VideoItem.scss';
import { Link } from 'react-router-dom';

const VideoItem = ({id,title,channel,image,currentVideoId}) => {

    // function handleClick(video) {
    //     // console.log(video)
    //     updateVideo(video.id)
    //     setSearchParams({videoId: video.id})
    // }

    // <div onClick={() => handleClick(video)} className="video-item">
    return currentVideoId === id ? null : (
      <Link to={`/video/${id}`} className="video-item">
        <img className='video-item__image' src={image} alt={channel} />
        <div className='video-item__container'>
            <p className='video-item__title'>{title}</p>
            <p className='video-item__channel'>{channel}</p>
        </div>
      </Link>
    );
  }
  
  export default VideoItem;