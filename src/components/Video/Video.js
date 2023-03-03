import './Video.scss';
import VideoDetails from '../VideoDetails/VideoDetails';

const Video = (props) => {

    const videoData = props.videoData;
    console.log(videoData);
  return (
    <main className="video">
    <video className='video__player' controls poster={videoData[0].image}>
    </video>
    <VideoDetails     
    key={videoData.id}
    id={videoData.id}
    title={videoData.title}
    channel={videoData.channel}
    description={videoData.description}
    views={videoData.views}
    likes={videoData.likes}
    />
    {/* <VideoList
    timestamp={videoData.timestamp}
    duration={videoData.duration}
    image={videoData.image}
    /> */}
    <h1>hi</h1>
    </main>
  );
}

export default Video;