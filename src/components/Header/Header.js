import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import './Header.scss';


function Header() {
    return (
      <header>
        <img
          className="header__logo"
          src={logo}
          href="../../public/index.html"
          alt="brainflix logo"
        />
        <form className="header__search" action="">
          <button className="header__search--icon" type="submit">
            <img
              className="global__icon"
              src={searchIcon}
              alt="search bar"
            />
          </button>
          <input
            className="header__search--input"
            type="text"
            placeholder="Search"
            name="search"
          ></input>
        </form>
        <div className="header__avatar">
          <img
            className="header__avatarpic"
            src={avatarIcon}
            alt="avatar pic"
          />
        </div>
        <form className="global__button" action="">
        <button type="submit">
        <img
              className="global__icon"
              src={uploadIcon}
              alt="upload bar"
            />
          <input className="header__upload" type="file" name="filename"></input>
        </button>
        </form>
      </header>
    );
}

export default Header;