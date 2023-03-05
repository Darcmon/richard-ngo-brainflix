import "./Video.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoList from "../VideoList/VideoList";
import VideoComments from "../VideoComments/VideoComments";

const Video = ({ videoData, videoList, currentVideo, updateVideo }) => {
  // console.log(currentVideo);

  return (
    <main className="video">
      <div className="video__container">
        <video
          className="video__player"
          controls
          poster={currentVideo.image}
        ></video>
      </div>
      <div className="video__body">
        <div className="video__desktop">
          <div className="video__desktop--main">
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

            <VideoComments currentVideo={currentVideo} />
          </div>
          <VideoList
          videoList={videoList}
          updateVideo={updateVideo}
          currentVideo={currentVideo}
          />
        </div>
      </div>
    </main>
  );
};

export default Video;
