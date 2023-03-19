import './VideoItem.scss';
import { Link } from 'react-router-dom';

const VideoItem = ({title,channel,image,currentVideo,video}) => {

    return currentVideo.id === video.id ? null : (
      <Link to={`/video/${video.id}`} className="video-item">
        <img className='video-item__image' src={image} alt={channel} />
        <div className='video-item__container'>
            <p className='video-item__title'>{title}</p>
            <p className='video-item__channel'>{channel}</p>
        </div>
      </Link>
    );
  }

  export default VideoItem;