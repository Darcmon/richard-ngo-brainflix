import "./VideoDetails.scss";
import viewIcon from "../../assets/images/icons/views.svg";
import likeIcon from "../../assets/images/icons/likes.svg";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

const VideoDetails = ({ videoList, currentVideo }) => {

  // const [currentVideo, setCurrentVideo] = useState(null);

  // let id = currentVideoId;
  // console.log(id);
  // console.log(videoList);
 
  // if (!id) {
  //   if (videoList.length > 0) {
  //     id = videoList[0].id;
  //     console.log(id);
  //   }
  //   // return;
  // }
  
  // let { id } = useParams();

  // useEffect(() => {
  //   if (!id) {
  //     return <h2>Loading..</h2>;
  //   }
  // }, []);


  // useEffect(() => {
  //   axios
  //     .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=b8ac9af7-8af8-4cd9-905d-c2ab0ef0d3a3`)
  //     .then(({data}) => {
  //       console.log(data);
  //       setCurrentVideo(data);
  //     })
  //     .catch(error => console.error(error));
  // }, [id]);

  if (currentVideo === null) {
    return <h1>Loading Video...</h1>;
  }

  function formDate(timestamp) {
    let d = new Date(timestamp);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return month + "/" + day + "/" + year;
  }

  return (
    <div className="video-details video-margin">
      <h1>{currentVideo.title}</h1>
      <div className="video-details__container">
        <div className="video-details__left">
          <p className="video-details__channel">By {currentVideo.channel}</p>
          <p className="video-details__date">
            {formDate(currentVideo.timestamp)}
          </p>
        </div>
        <div className="video-details__right">
          <div>
            <img src={viewIcon} alt="views icon" />
            <p className="video-details__views">{currentVideo.views}</p>
          </div>
          <div>
            <img src={likeIcon} alt="likes icon" />
            <p className="video-details__likes">{currentVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="video-details__description">{currentVideo.description}</p>
    </div>
  );
};

export default VideoDetails;
