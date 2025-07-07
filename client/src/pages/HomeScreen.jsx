import "../css/home.css";
import TransitionPage from "../components/transition/TransitionPage";
import { motion } from "framer-motion";
import LinksAbout from "../components/about/LinksAbout";
function HomeScreen() {
  return (
    <TransitionPage>
      <div className="containerDesktop">
        <div className="homeScreenContainer flex col center">
        <div className="flex row bet w100">
          <div className="socialMediaLinks flex col center">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
          </div>
            <div className="profilePhoto"></div>
            <div className="header flex col center">
              <h3>web developer</h3>
            </div>
        </div>
        </div>
      </div>
      <LinksAbout/>
    </TransitionPage>
  );
}

export default HomeScreen;
