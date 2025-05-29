
import useTitle from "../../hooks/useTitle";
import styles from "./NotFound.module.css";

function NotFound() {

  useTitle("");

  return <div id={styles.page_title}>NotFound</div>;
}

export default NotFound;