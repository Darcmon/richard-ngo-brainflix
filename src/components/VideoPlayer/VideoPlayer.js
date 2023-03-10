import './VideoPlayer.scss';

const VideoPlayer = ({currentVideo}) => {
    return (
        <>
        <video
        className="video__player"
        controls
        poster={currentVideo.image}
      ></video>
      </>
    );
  }
  
  export default VideoPlayer;