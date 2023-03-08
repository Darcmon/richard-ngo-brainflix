import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Upload from "./pages/Upload/Upload";

function App() {
  // const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  // function updateVideo(id) {
  //   const clickedVideo = videoDetails.find((e) => {
  //     return e.id === id;
  //   });
  //   setSelectedVideo(clickedVideo);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="upload" element={<Upload />} />
          <Route path="video" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
