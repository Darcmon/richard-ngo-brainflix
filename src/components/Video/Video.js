import './Video.scss';
import VideoDetails from '../VideoDetails/VideoDetails';
import VideoList from '../VideoList/VideoList';

const Video = (props) => {

    const videoData = props.videoData;
    const videoList = props.videoList;
    // console.log(videoData);
    // console.log(videoList);
  return (
    <main className="video">
    <div className='video__container'>
        <video className='video__player' controls poster={videoData[0].image}>
    </video>
    </div>
    <VideoDetails     
    key={videoData[0].id}
    id={videoData[0].id}
    title={videoData[0].title}
    channel={videoData[0].channel}
    description={videoData[0].description}
    views={videoData[0].views}
    likes={videoData[0].likes}
    timestamp={videoData[0].timestamp}
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
    />
    </main>
  );
}

export default Video;