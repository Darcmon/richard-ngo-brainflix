import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/icons/search.svg";
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
      <input
        className="header__search"
        type="text"
        placeholder="Search"
        name="search"
      ></input>
      <div className="header__avatar">
        <img className="header__avatarpic" src={avatarIcon} alt="avatar pic" />
      </div>
        <button className="button" type="submit">
          <img className="button__icon" src={uploadIcon} alt="upload bar" />
          <input className="button__upload" type="file" name="filename"></input>
          <label className="button__text" for="button__upload">UPLOAD</label>
        </button>
    </header>
  );
}

export default Header;