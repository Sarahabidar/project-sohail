import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { appRouter } from "../../router/appRouter";
import styles from "./MainLayout.module.css";
import { Button } from "@mui/material";

const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate(appRouter.LOGIN_PAGE, { replace: true });
  };
  return (
    <div>
      {/*<div className={`${styles.navBar} ${styles.navLinkExtra}`}>*/}
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
      {localStorage.getItem("username") ? (
        <Button
          onClick={handleLogout}
          variant="contained"
          color="secondary"
          className={styles.logoutButton}
        >
          Logout ({localStorage.getItem("username")})
        </Button>
      ) : (
        <NavLink
          to={appRouter.LOGIN_PAGE}
          className={({ isActive }) =>
            [isActive ? styles.active : ""].join(" ")
          }
        >
          Login
        </NavLink>
      )}
      <Outlet />
    </div>
  );
};

export default MainLayout;
