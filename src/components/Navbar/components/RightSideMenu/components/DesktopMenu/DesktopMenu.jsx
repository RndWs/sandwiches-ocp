
import MenuItems from "../MenuItems/MenuItems";

import styles from "./DesktopMenu.module.css";

const DesktopMenu = ({ activeIdx, setActiveIdx }) => (
  <ul className={styles.links}>
    <MenuItems
      from={"desktop"}
      activeIdx={activeIdx}
      setActiveIdx={setActiveIdx}
    />
  </ul>
);

export default DesktopMenu;