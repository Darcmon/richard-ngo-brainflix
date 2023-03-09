import "./HomePage.scss";
import { useState } from "react";
import videoDetails from "../../data/video-details.json";
import video from '../../data/videos.json'
import Video from "../../components/Video/Video";
import { useParams } from 'react-router-dom';

function HomePage() {
    // const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
    const { videoId } = useParams();

    console.log(videoId);

    let selectedVideo = videoDetails.find((e) => {
        return e.id === videoId;
    });
    if (!selectedVideo) {
        selectedVideo = videoDetails[0];
    }

    function updateVideo(id) {
    }

    // function updateVideo(id) {
    //   // console.log(videoDetails);
    //   const clickedVideo = videoDetails.find((e) => {
    //     // console.log(e);
    //     return e.id === id;
    //   });
    //   // console.log(clickedVideo);
    //   setSelectedVideo(clickedVideo);
    // }
  
    // console.log(videoDetails);
  
  return (
    <>
      <Video
        videoData={videoDetails}
        videoList={video}
        updateVideo={updateVideo}
        currentVideo={selectedVideo}
      />
    </>
  );
}

export default HomePage;
