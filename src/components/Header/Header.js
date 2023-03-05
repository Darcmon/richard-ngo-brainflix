import logo from "../../assets/images/logo/BrainFlix-logo.svg";
// import searchIcon from "../../assets/images/icons/search.svg";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header margin">
      <img
        className="header__logo"
        src={logo}
        href="../../public/index.html"
        alt="brainflix logo"
      />
      <div className="header__order">
        <div className="header__mobile">
          <input
            className="header__search"
            type="text"
            placeholder="Search"
            name="search"
          ></input>
          <img
            className="header__mobile--avatar"
            src={avatarIcon}
            alt="avatar pic"
          />
        </div>
        <div className="upload-btn-wrapper">
          <button className="btn">
            <img className="upload-btn-icon" src={uploadIcon} alt="upload icon"></img>
            <p className="btn-text">UPLOAD</p>
          </button>
          <input type="file" name="myfile" />
        </div>
        <img className="header__avatar" src={avatarIcon} alt="avatar pic" />
      </div>
    </header>
  );
}

export default Header;
