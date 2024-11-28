import { NavLink, Outlet } from "react-router-dom";
import { appRouter } from "../router/appRouter";
import styles from "./MainLayout.module.css";
const MainLayout = () => {
  return (
    <div>
      <div>
        <NavLink to={appRouter.HOME_PAGE} className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to={appRouter.POST_LIST_PAGE} className={styles.navLink}>
          Post List
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
