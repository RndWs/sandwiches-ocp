
import { useState } from "react";

import LeftSideMenu from "./components/LeftSideMenu/LeftSideMenu";
import RightSideMenu from './components/RightSideMenu/RightSideMenu';

import styles from './Navbar.module.css'

export default function Navbar() {

  // const [menuItemSelected, setMenuItemSelected] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <nav className={styles.navBar}>
      <LeftSideMenu activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
      <RightSideMenu activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
    </nav>
  );
}