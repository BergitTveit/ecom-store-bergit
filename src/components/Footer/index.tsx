import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  Copyright,
  FooterContainer,
  FooterContent,
  FooterLinks,
  FooterList,
  FooterSection,
} from "./styles";
import { IconsContainer } from "../CartIcon/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceDizzy,
  faFaceFlushed,
  faFaceGrimace,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { LogoContainer } from "../Header/styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>About Us</h4>
          <p>
            Obsess and possess prides ourselves on delivering you desires
            quickly and smoothly.
          </p>
          <IconsContainer>
            <a href="#">
              <FontAwesomeIcon icon={faFaceGrimace} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFaceDizzy} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFaceFlushed} />
            </a>
          </IconsContainer>
        </FooterSection>

        <FooterSection>
          <h4>Quick Links</h4>
          <FooterList>
            {[
              { to: "/", text: "About" },
              { to: "/contact", text: "Contact" },
              { to: "/", text: "FAQ" },
              { to: "/", text: "Shipping" },
            ].map((item, index) => (
              <FooterLinks key={index}>
                <Link to={item.to}>
                  <span>{item.text}</span>
                </Link>
              </FooterLinks>
            ))}
          </FooterList>
        </FooterSection>

        <FooterSection>
          <h4>Contact Info</h4>
          <FooterList>
            {[
              { text: "Email: obsess@possess.ts" },
              { text: "Phone; (0047) 909 09 909" },
              { text: "Address: 123 Possessed Street, Obsess" },
            ].map((item, index) => (
              <FooterLinks key={index}>
                <span>{item.text}</span>
              </FooterLinks>
            ))}
          </FooterList>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>
          &copy; {new Date().getFullYear()} Obsess and Possess. All rights
          reserved.
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
