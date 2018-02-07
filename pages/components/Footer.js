import React from "react";

const Footer = ({ pathname }) => {
  return (
    <footer className="footer">
      <div className="footer--wrapper">
        <p className="footer--copyright">
          © React in Vienna, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
