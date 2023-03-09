import './VideoDetails.scss';
import viewIcon from "../../assets/images/icons/views.svg"
import likeIcon from "../../assets/images/icons/likes.svg"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const VideoDetails = ({title, channel, description,views,likes, timestamp}) => {
  
  const [currentVideo, setCurrentVideo] = useState(null);
  let { id } = useParams();
  
  function formDate(timestamp){

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
    };

  return (
    <div className="video-details video-margin">
      <h1>{title}</h1>
      <div className="video-details__container">
        <div className="video-details__left">
          <p className="video-details__channel">By {channel}</p>
          <p className="video-details__date">{formDate(timestamp)}</p>
        </div>
        <div className="video-details__right">
          <div>
            <img src={viewIcon} alt="views icon"/>
            <p className="video-details__views">{views}</p>
          </div>
          <div>
            <img src={likeIcon} alt="likes icon"/>
            <p className="video-details__likes">{likes}</p>
          </div>
        </div>
      </div>
      <p className='video-details__description'>{description}</p>
    </div>
  );
}

export default VideoDetails;