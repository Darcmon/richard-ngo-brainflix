import "./Video.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
// import videoDetails from "../../data/video-details.json";
import VideoList from "../VideoList/VideoList";
// import VideoComments from "../VideoComments/VideoComments";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com/videos/?api_key=b8ac9af7-8af8-4cd9-905d-c2ab0ef0d3a3"

const Video = () => {
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  let { videoId } = useParams();

  if (!videoId) {
    if (videoList.length > 0) {
      videoId = videoList[0].videoId;
      console.log(videoId);
    }
    // return;
  }

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        console.log(response.data);
        setVideoList(response.data);
      }).catch(error => console.error(error))
    }, [])



  console.log(videoList);
  console.log(videoId);
    
  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=b8ac9af7-8af8-4cd9-905d-c2ab0ef0d3a3`)
      .then(({data}) => {
        console.log(data);
        setCurrentVideo(data);
      })
      .catch(error => console.error(error));
  }, [videoId]);  

  if (videoList.length === 0) {
    console.log("test");
    return (
    <h1>
        Loading...
    </h1>
    )
  }



  // let currentVideo = videoDetails.find((e) => {
  //   return e.id === videoId;
  // });
  // if (!currentVideo) {
  //     currentVideo = videoDetails[0];
  // }

  return (
    <main className="video">
      <div className="video__container">
        <video
          className="video__player"
          controls
          // poster={currentVideo.image}
        ></video>
      </div>
      <div className="video__body">
        <div className="video__desktop">
          <div className="video__desktop--main">
            <VideoDetails
              // key={currentVideo.id}
              // id={currentVideo.id}
              // title={currentVideo.title}
              // channel={currentVideo.channel}
              // description={currentVideo.description}
              // views={currentVideo.views}
              // likes={currentVideo.likes}
              // timestamp={currentVideo.timestamp}
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
