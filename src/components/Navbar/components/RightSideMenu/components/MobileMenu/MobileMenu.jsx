
import { useState } from "react";

import Burger from "../../../Burger/Burger";
import MenuItems from "../MenuItems/MenuItems";

import styles from "./MobileMenu.module.css";

const MobileMenu = ( { activeIdx, setActiveIdx } ) => {
  // hooks
  const [sideMenuActive, setSideMenuActive] = useState(false);

  return (
    <>
      <Burger isActive={sideMenuActive} setIsActive={setSideMenuActive} />

      <div
        id={styles.sideMenu}
        className={`${sideMenuActive ? styles.open : styles.closed}`}
      >
        <ul
          id={styles.sideMenuContent}
          className={`${sideMenuActive ? styles.visible : styles.invisible}`}
          onClick={() => setSideMenuActive(false)}
        >
          <MenuItems
            from={"mobile"}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
        </ul>
      </div>
    </>
  );
};
export default MobileMenu;