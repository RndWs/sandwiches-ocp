
import LeftSideMenu from "./components/LeftSideMenu/LeftSideMenu";
import RightSideMenu from './components/RightSideMenu/RightSideMenu';

import styles from './Navbar.module.css'

export default function Navbar() {

  // const [menuItemSelected, setMenuItemSelected] = useState(false);

  return (
    <nav className={styles.navBar}>
      <LeftSideMenu />
      <RightSideMenu />
    </nav>
  );
}