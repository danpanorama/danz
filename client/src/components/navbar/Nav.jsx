import { NavLink } from "react-router-dom";
import "../../css/nav.css";
import Logo from "../logo/Logo";

function Nav() {
  return (
    <div className="nav_bar">
      <div className="container h100 flex row align_center bet">
        <Logo />
        <div className="holding_links">
          <NavLink to={"/about"} className={"nav_link"}>
            contact
          </NavLink>
          <NavLink to={"/about"} className={"nav_link"}>
            project
          </NavLink>
          <NavLink to={"/about"} className={"nav_link"}>
            about
          </NavLink>
          <NavLink to={"/home"} className={"nav_link"}>
            home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
