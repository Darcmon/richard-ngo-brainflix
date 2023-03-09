import "./HomePage.scss";
import Video from "../../components/Video/Video";

function HomePage() {
    // const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);


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
        // videoData={videoDetails}
        // // videoOldList={video}
        // updateVideo={updateVideo}
        // currentVideo={selectedVideo}
      />
    </>
  );
}

export default HomePage;
