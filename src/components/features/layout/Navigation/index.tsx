import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-12 lg:gap-16">
        {[
          { to: "/", text: "Fashion" },
          { to: "/", text: "Beauty" },
          { to: "/", text: "Electronics" },
          { to: "/", text: "SALE" },
          //Swap out for map tags from fetch to get genres.
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="flex items-center gap-2 p-2 lg:px-4 text-black no-underline  lg:text-base hover:text-secondary"
            >
              <h3 className="m-0 text-sm">{item.text}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

//Most Frequent Tags - for NAV later.

// fashion: 4
// Covers categories like bags, shoes, and clothing accessories.
// beauty: 3
// Includes perfumes, skincare, and beauty products.
// electronics, audio, shoes, headphones: 2 each
// Electronics overlap with categories like headphones, speakers, and tech.
