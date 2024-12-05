import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="flex-1 hidden md:flex md:items-center md:justify-center md:mx-8">
      <ul className="flex items-center list-none gap-8 m-0 p-0">
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
              className="flex items-center text-black no-underline gap-2 p-2 hover:text-primary transition-colors lg:text-base lg:px-4"
            >
              <h3 className="m-0 text-sm">{item.text}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

//Most Frequent Tags - for NAV later.

// fashion: 4
// Covers categories like bags, shoes, and clothing accessories.
// beauty: 3
// Includes perfumes, skincare, and beauty products.
// electronics, audio, shoes, headphones: 2 each
// Electronics overlap with categories like headphones, speakers, and tech.
