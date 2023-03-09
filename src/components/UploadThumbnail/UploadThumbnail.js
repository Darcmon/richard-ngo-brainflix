import "./UploadThumbnail.scss";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";

const UploadThumbnail = (props) => {
  return (
    <>
    <div className="upload__container">
        <h3 className="upload__brow">VIDEO THUMBNAIL</h3>
        <img className="upload__image" src={videoThumbnail} alt="bike thumbnail"/>
    </div>
    </>
  );
};

export default UploadThumbnail;
