import "./UploadForm.scss";
import UploadThumbnail from "../../components/UploadThumbnail/UploadThumbnail";
import publishIcon from "../../assets/images/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const REACT_URL = process.env.REACT_APP_BASE_URL;

const UploadForm = (props) => {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);

    if (buttonClicked === "cancel") {
      console.log("Cancel button clicked");
      navigate("/");
      return;
    }

    setIsLoading(true);

    if (buttonClicked === "publish") {
      console.log("Published!");
      const currentDate = new Date();
      const unixTime = Math.floor(currentDate.getTime());
      const data = {
        title,
        description,
        timestamp: unixTime,
      };
      console.log("Data to be submitted:", data);
      axios.post(`${REACT_URL}/videos`, data)
      .then(() => {
        event.target.reset();
        setTimeout(() => {
          setIsLoading(false);
          navigate("/");
        }, 3000);
      })
      .catch(error => console.log(error));

      return;
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <form className="upload__form" onSubmit={handleOnSubmit}>
        {isLoading && (
          <div className="upload__overlay">
            <h1 className="upload__overlay--text">
              Submitted! Will proceed to home in 3s...
            </h1>
          </div>
        )}
        <div className="upload__form--boxes">
          <UploadThumbnail />
          <input
            type="hidden"
            id="date"
            name="date"
            value="currentDate"
          />
          <div className="upload__container--form">
            <h3 className="video-comment__title">TITLE YOUR VIDEO</h3>
            <textarea
              className="upload__input"
              id="title"
              type="text"
              name="title"
              placeholder="Add a title to your video"
              value={title}
              onChange={handleTitleChange}
            ></textarea>
            <h3 className="video-comment__title">
              ADD A VIDEO DESCRIPTION
            </h3>
            <textarea
              className="upload__input--description"
              id="description"
              type="text"
              name="description"
              placeholder="Add a description to your video"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>
        <div className="upload__container--buttons">
          <div className="upload__buttons">
            <button
              className="upload__cancel button-cancel"
              type="submit"
              name="cancel"
              onClick={() => setButtonClicked('cancel')}
            >
              CANCEL
            </button>
            <button
              className="upload__publish button"
              type="submit"
              name="publish"
              onClick={() => setButtonClicked('publish')}
            >
              <img
                className="upload-btn-icon"
                src={publishIcon}
                alt="publish icon"
              ></img>
              PUBLISH
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UploadForm;
