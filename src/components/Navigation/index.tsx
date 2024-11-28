import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavigationContainer, NavItem, NavList } from "./styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavList>
        {[
          { to: "/", icon: faHome, text: "Home" },
          { to: "/", text: "Option 1" },
          { to: "/", text: "Option 2" },
          { to: "/", text: "Option 3" },
          { to: "/", text: "SALE" },
          //Swap out for map tags from fetch to get genres.
        ].map((item, index) => (
          <NavItem key={index}>
            <Link to={item.to}>
              {item.icon && <FontAwesomeIcon icon={item.icon} />}
              <h3>{item.text}</h3>
            </Link>
          </NavItem>
        ))}
      </NavList>
    </NavigationContainer>
  );
};

export default Navigation;
