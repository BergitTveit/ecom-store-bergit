import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-8 mt-auto">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {[
              { to: "/", text: "About" },
              { to: "/contact", text: "Contact" },
              { to: "/", text: "FAQ" },
              { to: "/", text: "Shipping" },
            ].map((item, index) => (
              <li key={index} className="text-sm">
                <Link
                  to={item.to}
                  className="flex items-center text-black no-underline p-2 hover:text-primary transition-colors lg:text-base lg:px-4"
                >
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center flex-none">
            <Link to="/">
              <img
                src={logo}
                alt="Obsess and Possess Logo"
                className="h-[35px] w-auto transition-all duration-300 md:h-[40px] lg:h-[50px]"
              />
            </Link>
          </div>
          <p className="m-0 text-sm leading-relaxed">
            Obsess and possess prides ourselves on delivering you desires
            quickly and smoothly.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <h4 className="text-lg text-black mb-2">Contact Info</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {[
              { text: "obsess@possess.ts" },
              { text: "(0047) 909 09 909" },
              { text: "123 Possessed Street, Obsess" },
            ].map((item, index) => (
              <li key={index} className="text-sm">
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Add to the top button */}
      <div className="max-w-container mx-auto flex items-center justify-center px-4 mt-8 pt-4 border-t border-black/10 text-xs text-black">
        <p>
          &copy; {new Date().getFullYear()} Obsess and Possess. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
