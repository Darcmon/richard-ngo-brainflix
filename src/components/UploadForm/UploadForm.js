import "./UploadForm.scss";
import UploadThumbnail from "../../components/UploadThumbnail/UploadThumbnail";
import publishIcon from "../../assets/images/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const UploadForm = (props) => {
  const uploadRef = useRef();
  const navigate = useNavigate();
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted.");
    const form = uploadRef.current;

    if (event.target.name === "cancel") {
      console.log("Cancel button clicked");
      navigate("/");
      return;
    }

    if (event.target.name === "publish") {
        console.log("Published!");
        const submitPromise = new Promise((resolve) => {
            form.addEventListener("submit", () => {
              resolve();
            });
            form.dispatchEvent(new Event("submit", { cancelable: true }));
          });

        await submitPromise;
        setTimeout(() => {
            navigate("/");
          }, 2000);

        return;
    }
  }

  return (
    <>
      <form className="upload__form" ref={uploadRef}>
        <div className="upload__form--boxes">
          <UploadThumbnail />
          <input type="hidden" id="date" name="date" value="currentDate" />
          <div className="upload__container--form">
            <h3 className="video-comment__title">TITLE YOUR VIDEO</h3>
            <textarea
              className="upload__input"
              id="title"
              type="text"
              name="title"
              placeholder="Add a title to your video"
            ></textarea>
            <h3 className="video-comment__title">ADD A VIDEO DESCRIPTION</h3>
            <textarea
              className="upload__input"
              id="description"
              type="text"
              name="description"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </div>
        <div className="upload__container--buttons">
          <div className="upload__buttons">
            <button
              className="upload__cancel button-cancel"
              type="submit"
              name="cancel"
              onClick={handleOnSubmit}
            >
              CANCEL
            </button>
            <button
              className="upload__publish button"
              type="submit"
              name="publish"
              onClick={handleOnSubmit}
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
