
import NavigationSection from "../../../sharedComponents/navigationsComponents/NavigationSection";
import styles from "../TabletStyles.module.css";

const EditMode = ({ mode, formData, onChange, onSave, onBackClick }) => {
  
  const navigationActions = ["back"];

  return (
    <>
      <NavigationSection
        actions={navigationActions}
        onBackClick={onBackClick}
      />
      <h2 className={styles.title}>
        <label>
          Name:{" "}
          <input
            name="name"
            value={formData.name || ""}
            onChange={onChange}
            placeholder="Name"
          />
        </label>
      </h2>
      <p className={styles.screenSize}>
        <label>
          Screen Size:{" "}
          <input
            name="screenSize"
            value={formData.screenSize || ""}
            onChange={onChange}
            placeholder="Screen Size"
          />
        </label>
      </p>
      <p className={styles.batteryLife}>
        <label>
          Battery Life:{" "}
          <input
            name="batteryLife"
            value={formData.batteryLife || ""}
            onChange={onChange}
            placeholder="Battery Life"
          />
        </label>
      </p>
      <p>
        <label>
          Price:{" "}
          <input
            name="price"
            type="number"
            value={formData.price || ""}
            onChange={onChange}
            placeholder="Price"
          />
        </label>
      </p>
      <p>
        <label>
          In Stock:{" "}
          <input
            name="inStock"
            type="checkbox"
            checked={formData.inStock || false}
            onChange={onChange}
          />
        </label>
      </p>

      <div className={styles.buttonSection}>
        {formData.name &&
          formData.screenSize &&
          formData.batteryLife &&
          formData.price > 0 && 
          (
            <button onClick={() => onSave(formData)}>
              {mode === "edit" ? "Save Changes" : "Save"}
            </button>
          )}
      </div>
    </>
  );
};

export default EditMode;
