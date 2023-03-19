import "./Video.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoComments from "../VideoComments/VideoComments";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const REACT_URL = process.env.REACT_APP_BASE_URL;

const Video = () => {
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  let { videoId } = useParams();

  if (!videoId) {
    if (videoList.length > 0) {
      videoId = videoList[0].id;
      console.log(videoId);
    }
  }

  useEffect(() => {
    axios.get(`${REACT_URL}`)
      .then(response => {
        console.log(response.data);
        setVideoList(response.data);
      }).catch(error => console.error(error))
    }, [])
    
  useEffect(() => {
    if (videoList.length > 0) {
      const videoIndex = videoList.findIndex(video => video.id === videoId);
      if (videoIndex !== -1) {
        axios
          .get(`${REACT_URL}/videos/${videoId}`)
          .then(({data}) => {
            setCurrentVideo(data);
          })
          .catch(error => console.error(error));
      }
    }
  }, [videoId, videoList]);  

  if (videoList.length === 0 || currentVideo === null) {
    return (
    <h1>
        Loading...
    </h1>
    )
  }

  console.log(currentVideo);

  return (
    <main className="video">
      <div className="video__container">
        <VideoPlayer 
        currentVideo={currentVideo.video}
        />
      </div>
      <div className="video__body">
        <div className="video__desktop">
          <div className="video__desktop--main">
            <VideoDetails
              videoList={videoList}
              currentVideo={currentVideo.video}
            />

            <VideoComments 
            currentVideo={currentVideo.video}
            />
          </div>
          <VideoList
          videoList={videoList}
          currentVideo={currentVideo.video}
          />
        </div>
      </div>
    </main>
  );
};

export default Video;
