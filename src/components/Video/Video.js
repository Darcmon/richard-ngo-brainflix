import './Video.scss';
import VideoDetails from '../VideoDetails/VideoDetails';
import VideoList from '../VideoList/VideoList';

const Video = ({videoData, videoList, currentVideo, updateVideo}) => {

    console.log(currentVideo);

  return (
    <main className="video">
    <div className='video__container'>
        <video className='video__player' controls poster={currentVideo.image}>
    </video>
    </div>
    <div className='video__desktop'>
    <VideoDetails     
    key={currentVideo.id}
    id={currentVideo.id}
    title={currentVideo.title}
    channel={currentVideo.channel}
    description={currentVideo.description}
    views={currentVideo.views}
    likes={currentVideo.likes}
    timestamp={currentVideo.timestamp}
    />
    {/* {videoData.map( (details) => (
    <VideoDetails     
    key={details.id}
    id={details.id}
    title={details.title}
    channel={details.channel}
    description={details.description}
    views={details.views}
    likes={details.likes}
    />
    ))} */}
        
    <VideoList
    videoList = {videoList}
    updateVideo = {updateVideo}
    />
    </div>
    </main>
  );
}

export default Video;