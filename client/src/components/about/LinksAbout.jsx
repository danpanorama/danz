import { NavLink } from "react-router-dom";
import "../../css/about.css";
import Logo from "../logo/Logo";

function LinksAbout() {
  return (
    <div className="LinksAbout">
      <div className="bord">
        <h1 className="aboutLink">
          <span className="mailLink">
            <span>
              <span className="bord2">
                <span className="bord2">
                  <span>dani</span>
                </span>
                3<span>morcos</span>@
              </span>
            </span>
            gmail.com
          </span>
        </h1>
      </div>
    </div>
  );
}

export default LinksAbout;
