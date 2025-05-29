
import styles from "./MenuList.module.css";
import capitalize from '../../../functions/capitalize';


const MenuList = ({ menuData }) => {

  return (
    <div className={styles.menu}>
      <h2>{capitalize(menuData.typeLong)} Menu</h2>

      {menuData.typeDetailSandwiches && (
        <div>
          <ul>
            {Object.keys(menuData.typeDetailSandwiches).map(
              (sandwichKey, idx) => {
              const sandwich = menuData.typeDetailSandwiches[sandwichKey];
                return (
                  <li key={idx}>{sandwich.name}</li>
                );
              }
            )}
          </ul>
        </div>
      )}

    </div>
  );
};

export default MenuList;
