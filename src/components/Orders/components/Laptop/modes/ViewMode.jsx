
import NavigationSection from "../../../sharedComponents/navigationsComponents/NavigationSection";
import styles from "../../Laptop/LaptopStyles.module.css";

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
      <p>{formData.description}</p>
      <p>
        <> Price: $ {Number(formData.price).toFixed(2)}</>
      </p>

      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default ViewMode;