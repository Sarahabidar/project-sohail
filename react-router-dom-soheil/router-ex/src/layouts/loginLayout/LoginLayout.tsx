/*import { NavLink, Outlet } from "react-router-dom";
import { appRouter } from "../../router/appRouter";
import styles from "./LoginLayout.module.css";

const LoginLayout = () => {
  return (
    <div>
      <div className={`${styles.navbar}`}>
        <NavLink
          to={appRouter.LOGIN_PAGE}
          className={({ isActive }) =>
            [styles.navLink, isActive ? styles.active : ""].join(" ")
          }
          replace
        >
          Login
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default LoginLayout;
*/
import { NavLink, Outlet } from "react-router-dom";
import { appRouter } from "../../router/appRouter";
import styles from "./LoginLayout.module.css";

const LoginLayout = () => {
  return (
    <div>
      {/* <div className={styles.navBar}>
        <NavLink
          to={appRouter.HOME_PAGE}
          className={({ isActive }) =>
            [styles.navLink, isActive ? styles.active : ""].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to={appRouter.LOGIN_PAGE}
          className={({ isActive }) =>
            [styles.navLink, isActive ? styles.active : ""].join(" ")
          }
        >
          Login
        </NavLink>
      </div> */}

      <Outlet />
    </div>
  );
};

export default LoginLayout;
