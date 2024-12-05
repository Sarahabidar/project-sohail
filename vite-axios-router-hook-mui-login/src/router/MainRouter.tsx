import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostListPage from "../pages/PostListPage";
import { appRouter } from "./appRouter";
import MainLayout from "../layout/mainLayout/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";
import PostItemPage from "../pages/PostItemPage";
import LoginLayout from "../layout/loginLayout/LoginLayout";
import LoginPage from "../pages/LoginPage";
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultRoute />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route element={<MainLayout />}>
          <Route path={appRouter.HOME_PAGE} element={<HomePage />} />
          <Route path={appRouter.POST_LIST_PAGE} element={<PostListPage />} />
          <Route
            path={appRouter.POST_ITEM_PAGE + ":id"}
            element={<PostItemPage />}
          />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path={appRouter.LOGIN_PAGE} element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
const DefaultRoute = () => <Navigate to={appRouter.HOME_PAGE} />; //we write this for default value just /
export default MainRouter;
