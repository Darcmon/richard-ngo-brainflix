import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem'

const VideoList = ({videoList, currentVideo}) => {

    return (
      <section className="video-list">
        <h3>NEXT VIDEOS</h3>
        {videoList.map((video) => (
          <VideoItem
            video={video}
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
            currentVideo={currentVideo}
          />
        ))}
      </section>
    );
  }
  
  export default VideoList;