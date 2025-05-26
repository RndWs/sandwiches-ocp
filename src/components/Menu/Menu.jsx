
import usePageNameToTitle from "../../hooks/usePageNameToTitle";
import styles from './Menu.module.css';

function Menu() {
  usePageNameToTitle("Menu");

  return (
    <div id={styles.page_title}>Menu</div>
  )
}

export default Menu