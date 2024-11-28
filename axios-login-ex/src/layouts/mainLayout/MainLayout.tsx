import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { appRouter } from "../../router/appRouter";
import styles from "./MainLayout.module.css";
import { Button } from "@mui/material";

const MainLayout = () => {
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();
  /*const location = useLocation();
  const isLoginPage = location.pathname === appRouter.LOGIN_PAGE;*/

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    navigate(appRouter.LOGIN_PAGE, { replace: true });
  };

  return (
    <div>
      {/*<div classNamae={`${styles.navbar} ${styles.navLinkEtra}`}></div>*/}
      <div className={[styles.navBar, styles.navLinkExtra].join(" ")}>
        <NavLink
          to={appRouter.HOME_PAGE}
          className={({ isActive }) =>
            [styles.navLink, isActive ? styles.active : ""].join(" ")
          }
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
        {username ? (
          <Button
            onClick={handleLogout}
            variant="contained"
            color="secondary"
            className={styles.logoutButton}
          >
            Logout ({username})
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
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
