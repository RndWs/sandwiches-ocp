
import usePageNameToTitle from "../../hooks/usePageNameToTitle";
import styles from "./NotFound.module.css";

function NotFound() {

  usePageNameToTitle("");

  return <div id={styles.page_title}>NotFound</div>;
}

export default NotFound;