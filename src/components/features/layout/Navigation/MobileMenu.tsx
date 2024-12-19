import { useState } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black p-2"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`
              block h-0.5 w-full bg-black transition-all duration-300
              ${isOpen ? "rotate-45 translate-y-2" : ""}
            `}
          />
          <span
            className={`
              block h-0.5 w-full bg-black transition-opacity duration-300
              ${isOpen ? "opacity-0" : ""}
            `}
          />
          <span
            className={`
              block h-0.5 w-full bg-black transition-all duration-300
              ${isOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white shadow-lg">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              {[
                { to: "/", text: "Fashion" },
                { to: "/", text: "Beauty" },
                { to: "/", text: "Electronics" },
                { to: "/", text: "SALE" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-black hover:text-primary transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
