import "./Footer.css";

import React, { useState } from "react";

import { FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiGithub } from "react-icons/si";
import { IoLogoPaypal } from "react-icons/io5";
import { TbBrandVisa } from "react-icons/tb";
import { FaCcStripe } from "react-icons/fa";
import { LiaCcDiscover } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  // const [email, setEmail] = useState(null);
  // const [Subscribed, setSubscribed] = useState(false);

  // function handleInputChange(evt) {
  //   evt.preventDefault();
  //   setEmail(evt.target.value);
  // }

  // function handleSubmitClick() {
  //   setSubscribed((prev) => !prev);
  // }

  return (
    <div className="footerOutterContainer">
      <div className="footerContainer">
        <div className="footerLeft">
          <h2>More about Refer and Earn</h2>
          <p style={{ margin: ".5rem 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptatum laborum asperiores ratione sunt nam nulla eligendi et
            omnis ab fuga dolorem error totam quidem nostrum, saepe maxime alias
            quisquam ea aut nisi harum. Molestiae nisi possimus excepturi
            dolorem obcaecati deleniti debitis ex repellendus culpa!
          </p>
          <div className="iconContainer">
            <Link
              to="https://github.com/chiragtilwani"
              style={{ textDecoration: "none", color: "black" }}
            >
              <SiGithub style={{ fontSize: "1.5rem" }} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/chiragtilwani/?originalSubdomain=in"
              style={{ textDecoration: "none", color: "black" }}
            >
              <TiSocialLinkedin style={{ fontSize: "1.5rem" }} />
            </Link>
            <Link
              to="https://www.instagram.com/?hl=en"
              style={{ textDecoration: "none", color: "black" }}
            >
              <FaInstagram style={{ fontSize: "1.5rem" }} />
            </Link>
          </div>
        </div>

        <div className="footerMid">
          <h2>Courses</h2>
          <div className="FooterCategoryContainer">
            <Link to="" className="footerLinks">
              MERN stack
            </Link>
            <Link to="" className="footerLinks">
              Java development
            </Link>
            <Link to="" className="footerLinks">
              Flutter
            </Link>
            <Link to="" className="footerLinks">
              Native Android
            </Link>
            <Link to="" className="footerLinks">
              C++/deep dive
            </Link>
            <Link to="" className="footerLinks">
              Kotlin
            </Link>
          </div>
        </div>

        <div className="footerRight">
          <h2>Subscribe to our newsletter.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            deleniti et iste commodi laboriosam blanditiis eligendi dolorem
            eveniet aspernatur expedita, sequi libero illum, dignissimos vitae
            voluptatibus laborum a? Assumenda, similique. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Consequuntur rerum hic debitis
            quis voluptate minima libero adipisci excepturi accusamus repellat.
          </p>
          {/* <div>
            {Subscribed ? (
              <span
                style={{
                  color: "green",
                  opacity: Subscribed ? "1" : "0",
                  transitionDuration: ".2s",
                }}
              >
                Subscribed Successfully !
              </span>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="footerInput"
                  onChange={handleInputChange}
                />
                <button
                  className="footerButton"
                  disabled={email ? false : true}
                  onClick={handleSubmitClick}
                >
                  Subscribe
                </button>
              </>
            )}
          </div> */}
          <div className="FooterPaymentIcons">
            <IoLogoPaypal style={{ fontSize: "1.5rem" }} />
            <TbBrandVisa style={{ fontSize: "1.5rem" }} />
            <FaCcStripe style={{ fontSize: "1.5rem" }} />
            <LiaCcDiscover style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
      </div>
      <div className="copyrightLine">
        ©Copyright 2024 | Refer And Earn | All Rights Reserved | Powered by Chirag
        Tilwani
      </div>
    </div>
  );
};

export default Footer;
