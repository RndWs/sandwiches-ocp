
import usePageNameToTitle from '../../hooks/usePageNameToTitle';
import styles from "./Home.module.css";

const Home = () => {
  
  usePageNameToTitle("Home");


  return (
    <div id={styles.page_title}>Home</div>
  )
};

export default Home;