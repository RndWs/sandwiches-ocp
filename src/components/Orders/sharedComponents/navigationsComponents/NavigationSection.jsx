
import styles from "./NavigationSection.module.css"

export default function NavigationSection({
  actions,
  onEditClick,
  onDetailClick,
  onBackClick,
}) {
  const actionObj = {
    edit: (
      <button key={"edit"} className={styles.edit} onClick={onEditClick}>
        Edit
      </button>
    ),
    detail: (
      <button key={"detail"} onClick={onDetailClick}>
        Detail
      </button>
    ),
    back: (
      <button key={"back"} onClick={onBackClick}>
        Back
      </button>
    ),
  };
  return (
    <div className={styles.navigationSection}>
      {actions.map((act) => {
        return actionObj[act];
      })}
    </div>
  );
}