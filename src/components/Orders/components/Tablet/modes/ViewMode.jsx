
import NavigationSection from "../../../sharedComponents/navigationsComponents/NavigationSection";
import styles from "../TabletStyles.module.css";

const ViewMode = ({ formData, onEditClick, onDetailClick }) => {

  const navigationActions = ["edit", "detail"];

  return (
    <>
      <NavigationSection
        actions={navigationActions}
        onEditClick={onEditClick}
        onDetailClick={onDetailClick}
      />
      <h2 className={styles.title}>{formData.name}</h2>
      <p className={styles.screenSize}>screen size: {formData.screenSize}</p>
      <p className={styles.batteryLife}> battery life: {formData.batteryLife}</p>
      <p>
        <> Price: $ {Number(formData.price).toFixed(2)}</>
      </p>
      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default ViewMode;