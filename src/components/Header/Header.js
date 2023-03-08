import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header margin">
      <NavLink to="/"><img
        className="header__logo"
        src={logo}
        href="../../public/index.html"
        alt="brainflix logo"
      />
      </NavLink>
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
          <NavLink to="/upload">
            <button className="btn">
              <img
                className="upload-btn-icon"
                src={uploadIcon}
                alt="upload icon"
              ></img>
              <p className="btn-text">UPLOAD</p>
            </button>
            </NavLink>
          </div>
        
        <img className="header__avatar" src={avatarIcon} alt="avatar pic" />
      </div>
    </header>
  );
}

export default Header;
