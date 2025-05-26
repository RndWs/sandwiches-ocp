
import { Link } from "react-router-dom";


// IMPORT HOOKS
import useWindowWidth from "../../hooks/useWindowWidth";

// IMPORT FUNCTIONS
import getUrl from "../../../../functions/getUrl";

// css
import styles from "./LeftSideMenu.module.css";


const LeftSideMenu = ({ setActiveIdx }) => {
  // use custom hooks
  const width = useWindowWidth();

  const BASE_URL = getUrl();
  // console.log(`BASE_URL: ${BASE_URL}`);

  const handleClick = () => {
    setActiveIdx(0);
  };

  return (
    <div className={styles.leftSide}>
      <div id={styles.logo}>
        <div id={styles.logoLink}>
          <div className={styles.link}>
            <Link to={BASE_URL + "/"} onClick={() => handleClick()}>
              Sand
            </Link>
            <span>{width}px</span>
          </div>
          <Link to={BASE_URL + "/"} onClick={() => handleClick()}>
            Wiches
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LeftSideMenu;
