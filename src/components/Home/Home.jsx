
import useTitle from "../../hooks/useTitle";
import styles from "./Home.module.css";

const Home = () => {
  
  useTitle("Home");


  return (
    <div id={styles.page_title}>Home</div>
  )
};

export default Home;