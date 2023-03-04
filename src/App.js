import './App.scss';
import { useState } from 'react';
import videoDetails from './data/video-details.json';
import video from './data/videos.json';
import Header from './components/Header/Header';
import Video from './components/Video/Video';

function App() {


  const [selectedVideo, setSelectedVideo] = useState (videoDetails[0]);


  function updateVideo(id){
    console.log(videoDetails);
    const clickedVideo = videoDetails.find(e => {
      console.log(e);
      return e.id===id
    })
    console.log(clickedVideo);
    setSelectedVideo(clickedVideo)
  }

  console.log(videoDetails);

  return (
    <div className="App">
      <Header/>
      <Video
      videoData = {videoDetails}
      videoList = {video}
      updateVideo = {updateVideo}
      currentVideo = {selectedVideo}
      />
    </div>
  );
}

export default App;
