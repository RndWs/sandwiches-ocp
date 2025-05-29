
import MenuList from "./components/MenuList";
import menusObj from "../../data/menusObj/menusObj";

import useTitle from "../../hooks/useTitle";
import styles from './Menu.module.css';

function Menu() {
  useTitle("Menu");

  return (
    <>
      <div id={styles.page_title}>Menu</div>

      <div className={styles.content}>
        {Object.keys(menusObj).map((menuKey) => (
          <MenuList key={menuKey} menuData={menusObj[menuKey]} />
        ))}
      </div>
    </>
  );
}

export default Menu