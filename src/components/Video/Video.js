import "./Video.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
// import VideoComments from "../VideoComments/VideoComments";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const Video = () => {
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  let { videoId } = useParams();

  if (!videoId) {
    if (videoList.length > 0) {
      videoId = videoList[0].id;
      console.log(videoId);
      // return;
    }
    // return;
  }

  useEffect(() => {
    axios.get("https://project-2-api.herokuapp.com/videos/?api_key=b8ac9af7-8af8-4cd9-905d-c2ab0ef0d3a3")
      .then(response => {
        console.log(response.data);
        setVideoList(response.data);
      }).catch(error => console.error(error))
    }, [])

  console.log(videoList);
  console.log(videoId);
    
  useEffect(() => {
    if (videoList.length > 0) {
      const videoIndex = videoList.findIndex(video => video.id === videoId);
      if (videoIndex !== -1) {
        axios
          .get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=b8ac9af7-8af8-4cd9-905d-c2ab0ef0d3a3`)
          .then(({data}) => {
            console.log(data);
            setCurrentVideo(data);
          })
          .catch(error => console.error(error));
      }
    }
  }, [videoId, videoList]);  

  if (videoList.length === 0 || currentVideo === null) {
    console.log("test");
    return (
    <h1>
        Loading...
    </h1>
    )
  }

  return (
    <main className="video">
      <div className="video__container">
        <VideoPlayer 
        currentVideo={currentVideo}
        />
      </div>
      <div className="video__body">
        <div className="video__desktop">
          <div className="video__desktop--main">
            <VideoDetails
              videoList={videoList}
              currentVideo={currentVideo}
            />

            {/* <VideoComments videoList={videoList} /> */}
          </div>
          <VideoList
          videoList={videoList}
          // updateVideo={updateVideo}
          currentVideo={currentVideo}
          />
        </div>
      </div>
    </main>
  );
};

export default Video;
