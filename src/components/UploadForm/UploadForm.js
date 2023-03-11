import "./UploadForm.scss";
import UploadThumbnail from "../../components/UploadThumbnail/UploadThumbnail";
import publishIcon from "../../assets/images/icons/publish.svg";

const UploadForm = (props) => {
  return (
    <>
      <form className="upload__form">
        <div className="upload__form--boxes">
        <UploadThumbnail/>
        <input type="hidden" id="date" name="date" value="currentDate" />
        <div className="upload__container">
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
        <div className="upload__container">
        <div className="upload__buttons">
          <button className="upload__cancel" type="submit">
            <img
              className="upload__icon"
              src={publishIcon}
              alt="publish icon"
            ></img>
            CANCEL
          </button>
          <button className="upload__publish" type="submit">
            <img
              className="upload__icon"
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
