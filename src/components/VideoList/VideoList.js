import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem'

const VideoList = (props) => {
    console.log(props)
    return (
      <section className="video-list">
        <h3>NEXT VIDEOS</h3>
        {props.videoList.map((item) => (
          <VideoItem
            key={item.id}
            id={item.id}
            title={item.title}
            channel={item.channel}
            image={item.image}
          />
        ))}
      </section>
    );
  }
  
  export default VideoList;