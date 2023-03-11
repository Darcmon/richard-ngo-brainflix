import "./Upload.scss";
import UploadForm from "../../components/UploadForm/UploadForm";

const Upload = (props) => {
  return (
    <section className="upload margin">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__container">
         
        <UploadForm/>
       
      </div>
    </section>
  );
};

export default Upload;
