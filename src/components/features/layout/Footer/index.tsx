import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="w-full mt-auto py-8  bg-secondary shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container-width container-padding">
        <div className="flex justify-center mb-8">
          <ul className="list-none p-0 m-0 flex gap-6">
            {[
              { to: "/", text: "About" },
              { to: "/contact", text: "Contact" },
              { to: "/", text: "FAQ" },
              { to: "/", text: "Shipping" },
            ].map((item, index) => (
              <li key={index} className="text-sm">
                <Link
                  to={item.to}
                  className="flex items-center  p-2 lg:px-4 text-black no-underline lg:text-base hover:text-primary "
                >
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8">
          {" "}
          <div className="flex flex-col items-center text-center gap-5">
            <p className="m-0 text-sm leading-relaxed">
              Obsess and possess prides ourselves on delivering you desires
              quickly and smoothly.
            </p>
            <div className="flex items-center gap-10">
              <a
                href="https://www.facebook.com/"
                className="text-black hover:text-primary "
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-black hover:text-primary "
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
              <a
                href="https://x.com/"
                className="text-black hover:text-primary "
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
            </div>

            <h4 className="text-lg text-black mb-2">Contact Info</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
              {[
                { text: "obsess@possess.ts" },
                { text: "(0047) 123 45 678" },
                { text: "123 Possessed Street, Obsess" },
              ].map((item, index) => (
                <li key={index} className="text-sm">
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
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
