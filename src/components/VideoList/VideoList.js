import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem'

const VideoList = (props) => {
    // console.log(props)
    return (
      <section className="video-list">
        <h3>NEXT VIDEOS</h3>
        {props.videoList.map((video) => (
          <VideoItem
            video={video}
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
            updateVideo={props.updateVideo}
            currentVideo={props.currentVideo}
          />
        ))}
      </section>
    );
  }
  
  export default VideoList;