
import { useState, useEffect } from 'react';

import styles from  "./Burger.module.css";

function Burger( { isActive, setIsActive } ) {

  const [svgClass, setSvgClass] = useState('');

  
  useEffect(() => {
    // console.log(`isActive ${isActive}`);

    isActive
      ? setSvgClass(styles["hamburgerIconActive"])
      : setSvgClass(styles["hamburgerIcon"]);
  
  }, [isActive])

  // useEffect(() => {
  //   console.log(`svgClass: ${svgClass}`);
  // }, [svgClass]);

  function handleBurgerClick() {
    setIsActive(!isActive);
  }

  return (
    <div id={styles.burgerContainer} onClick={handleBurgerClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
        width="18"
        height="18"
        viewBox="0 0 48 48"
      >
        <rect
          className={styles.top}
          x="0"
          y="0"
          rx="4"
          ry="4"
          width="100%"
          height="8"
        />
        <rect
          className={styles.middle}
          x="0"
          y="20"
          rx="4"
          ry="4"
          width="100%"
          height="8"
        />
        <rect
          className={styles.bottom}
          x="0"
          y="40"
          rx="4"
          ry="4"
          width="100%"
          height="8"
        />
      </svg>
    </div>
  );
}

export default Burger