
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import menuArray from "../../../../../../menu-setup/menuArray";

import styles from "./MenuItems.module.css";

const MenuItems = ({ from, activeIdx, setActiveIdx }) => {
  // const [activeIdx, setActiveIdx] = useState(0);
  
  const colors = {
    desktop: "desktopActive",
    mobile: "mobileActive",
  };
  
  const [activeColor, setActiveColor] = useState(colors[from]);
  
  const handleClick = (idx) => {
    console.log(`idx: ${JSON.stringify(idx)}`);
    setActiveIdx(idx);

    setActiveColor(colors[from]);
  };

  useEffect(() => {
    console.log(`from: ${from}`);
    console.log(`activeIdx: ${activeIdx}`);
    console.log(`activeColor: ${activeColor}`);
  }, [activeIdx, activeColor]);

  return menuArray.map((item, idx) => {
    return (
      // <li className={styles.items} key={idx}>
      <li
        key={idx}
        className={idx === activeIdx ? styles[activeColor] : ""}
        onClick={() => handleClick(idx)}
      >
        <Link
          to={item.link}
          className={idx === activeIdx ? styles[activeColor] : ""}
        >
          {item.name}
        </Link>
      </li>
    );
  });
};

export default MenuItems;