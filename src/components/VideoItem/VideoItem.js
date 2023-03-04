import './VideoItem.scss';

const VideoItem = ({id,title,channel,image,video,updateVideo}) => {
    function handleClick(video) {
        console.log(video)
        updateVideo(video.id)
    }

    return (
      <>
        <div onClick={() => handleClick(video)} className="video-item">
        <img className='video-item__image' src={image} alt={channel} />
        <div className='video-item__container'>
            <p className='video-item__title'>{title}</p>
            <p className='video-item__channel'>{channel}</p>
        </div>
        </div>
      </>
    );
  }
  
  export default VideoItem;