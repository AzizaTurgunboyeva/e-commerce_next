import React from "react";
import { FooterWrapper, FooterContainer } from "./Footer.styled";
import { google, master, pay, paypal, visa } from "./images";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { footerSections } from "./footerLinks"; 
import FooterDetail from "./components";

const Footer = () => {
  const pays = [visa, master, paypal, pay, google];

  return (
    <FooterWrapper>
      <div className="newsletter-floating">
        <FooterDetail />
      </div>
      <FooterContainer>
        <div className="paragrif-wrapper">
          {/* Left side */}
          <div className="footer-paragrif">
            <span>SHOP.CO</span>
            <p>
              We have clothes that suits your style and
              which you're proud to wear. From women to men.
            </p>
            <div className="footer-icons">
              <BsTwitter />
              <BsFacebook />
              <BsInstagram />
              <BsGithub />
            </div>
          </div>

          {footerSections.map((section) => (
            <div className="footer-paragrif" key={section.title}>
              <p>{section.title}</p>
              {section.links.map((link) => (
                <p key={link}>{link}</p>
              ))}
            </div>
          ))}
        </div>

        <hr />

        <div className="footer-finish">
          <p>Shop.co © 2000–2023, All Rights Reserved</p>
          <div className="payment-cards">
            {pays.map((src, i) => (
              <img src={src} key={i} alt="payment-option" />
            ))}
          </div>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
