import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem'

const VideoList = ({videoList, currentVideoId}) => {
    // console.log(props)

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
            // updateVideo={props.updateVideo}
            currentVideoId={currentVideoId}
          />
        ))}
      </section>
    );
  }
  
  export default VideoList;