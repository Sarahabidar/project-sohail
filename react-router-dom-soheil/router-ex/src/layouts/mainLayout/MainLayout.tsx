import { NavLink, Outlet } from "react-router-dom";
import { appRouter } from "../../router/appRouter";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div>
      <div className={[styles.navBar, styles.navLinkExtra].join(" ")}>
        <NavLink
          to={appRouter.HOME_PAGE}
          className={({ isActive }) =>
            [styles.navLink, isActive ? styles.active : ""].join(" ")
          }
          replace
        >
          Home
        </NavLink>
        <NavLink
          to={appRouter.POST_LIST_PAGE}
          className={({ isActive }) =>
            [styles.navLink, isActive ? styles.active : ""].join(" ")
          }
          replace
        >
          Post List
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
