import "./Upload.scss";
import UploadThumbnail from "../../components/UploadThumbnail/UploadThumbnail";

const Upload = (props) => {
  return (
    <section className="upload margin">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__container">
         
        <UploadThumbnail/>
        {/*<UploadForm/>
        */}
      </div>
    </section>
  );
};

export default Upload;
