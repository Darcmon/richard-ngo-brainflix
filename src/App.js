import './App.scss';
// import { useState } from 'react';
import videoDetails from './data/video-details.json';
import video from './data/videos.json';
import Header from './components/Header/Header';
import Video from './components/Video/Video';

function App() {
  console.log(videoDetails);

  // const [videoDetails, setActiveVideo] = useState (initialVideo[0]);

  return (
    <div className="App">
      <Header/>
      <Video
      videoData = {videoDetails}
      videoList = {video}
      />
    </div>
  );
}

export default App;
