
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";

// IMPORT HOOKS
import useWindowWidth from "../../hooks/useWindowWidth";

// css
import styles from "./RightSideMenu.module.css";

const RightSideMenu = () => {

  const [activeIdx, setActiveIdx] = useState(0);

  // use custom hooks
  const width = useWindowWidth();

  const isMobileView = width <= 1020;

  return (
    <div className={styles.rightSide}>
      {isMobileView ? (
        <MobileMenu setActiveIdx={setActiveIdx} activeIdx={activeIdx} />
      ) : (
        <DesktopMenu setActiveIdx={setActiveIdx} activeIdx={activeIdx} />
      )}
    </div>
  );
};

export default RightSideMenu;