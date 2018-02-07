import React from "react";
import Navigation from "./Navigation";
import logo from "assets/img/logo.svg";

const Header = ({ pathname, title }) => {
  const isHomePage = pathname === "/";
  return isHomePage ? (
    <header className={isHomePage ? "header header_index" : "header"}>
      <div className="header--container container grid grid_6col">
        <a href="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={140}
              height={126}
              alt="React in Vienna Logo"
              className="logo--image"
            />
            <span className="logo--title">
              <span className="logo--text logo--text-top">React </span>
              <span className="logo--text logo--text-bottom">in Vienna</span>
            </span>
          </h1>
        </a>

        <h2 className="header--tagline">
          Sharpen up your React skills with local professionals!
        </h2>

        <section className="header--buy">
          <a href="/#tickets" className="buy-button">
            Buy tickets
          </a>
        </section>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header--container container grid grid_6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <a href="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={140}
              height={126}
              alt="React Finland Logo"
              className="logo--image"
            />
            <span className="logo--title">
              <span className="logo--text logo--text-top">React </span>
              <span className="logo--text logo--text-bottom">Finland</span>
            </span>
          </h1>
        </a>
        <h2 className="header--pageTitle">{title}</h2>
      </div>
    </header>
  );
};

export default Header;
