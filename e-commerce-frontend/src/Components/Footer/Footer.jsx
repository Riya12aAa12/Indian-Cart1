import React from "react";
import "./Footer.css";

import footer_logo from "../Assets/IndianCartLogo.png";
import pintrest_icon from "../Assets/pinterest-logo.png";
import whatsapp_icon from "../Assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p className="logo-text">
          <span className="indian-text">Indian </span>
          <span className="cart-text">Cart</span>
        </p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icons">
        <button class="Btn">
          <span class="svgContainer">
            <svg
              fill="white"
              class="svgIcon"
              viewBox="0 0 448 512"
              height="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </span>
          <span class="BG"></span>
        </button>
        <button class="Btn">
          <span class="svgContainer">
            <img src={pintrest_icon} width="25px" alt="" />
          </span>
          <span class="BG-p"></span>
        </button>

        <button class="Btn">
          <span class="svgContainer">
            <img src={whatsapp_icon} width="25px" alt="" />
          </span>
          <span class="BG-w"></span>
        </button>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
        <h6>Made by V S SINGH</h6>
      </div>
    </div>
  );
};

export default Footer;
