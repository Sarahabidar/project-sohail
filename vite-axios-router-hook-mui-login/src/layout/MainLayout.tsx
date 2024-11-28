import { NavLink, Outlet } from "react-router-dom";
import { appRouter } from "../router/appRouter";
const MainLayout = () => {
  return (
    <div>
      <div>
        <NavLink to={appRouter.HOME_PAGE}>Home</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
