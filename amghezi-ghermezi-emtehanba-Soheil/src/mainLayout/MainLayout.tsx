import { NavLink, Outlet } from "react-router-dom";
import { appRouter } from "../mainRouter/appRouter";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <div className={styles.navBar}>
        <NavLink to={appRouter.HOME_PAGE} className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to={appRouter.POST_LIST_PAGE} className={styles.navLink}>
          Post
        </NavLink>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
