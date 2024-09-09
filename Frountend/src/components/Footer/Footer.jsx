import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.TopTasteGrey} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatem magni neque hic voluptates excepturi perferendis odit.
            Porro neque fuga dolor similique ratione et ullam, quis delectus
            nihil, nulla at!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delevery</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in tuch</h2>
          <ul>
            <li>+91 8329173454</li>
            <li>prathameshlokhande378@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        copyright 2024 © TopTaste.com -All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
