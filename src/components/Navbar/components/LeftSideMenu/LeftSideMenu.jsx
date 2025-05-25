
import { Link } from "react-router-dom";


// IMPORT HOOKS
import useWindowWidth from "../../hooks/useWindowWidth";

// IMPORT FUNCTIONS
import getUrl from "../../../../functions/getUrl";

// css
import styles from "./LeftSideMenu.module.css";


const LeftSideMenu = () => {

  // use custom hooks
  const width = useWindowWidth();

  const BASE_URL = getUrl();
  // console.log(`BASE_URL: ${BASE_URL}`);

  return (
    <div className={styles.leftSide}>
      <div id={styles.logo}>
        <div id={styles.logoLink}>
          <div className={styles.link}>
            <Link to={BASE_URL + "/"}>Sand</Link>
            <span>{width}px</span>
          </div>
          <Link to={BASE_URL + "/"}>Wiches</Link>
        </div>
      </div>
    </div>
  );
};
export default LeftSideMenu;
