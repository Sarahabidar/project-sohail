import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { appRouter } from "./appRouter";
import HomePage from "../pages/HomePage.tsx";
import PostListPage from "../pages/PostListPage";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import MainLayout from "../layouts/mainLayout/MainLayout.tsx";
import PostListItem from "../pages/PostListItem.tsx";
import LoginLayout from "../layouts/loginLayout/LoginLayout.tsx";
import LoginPage from "../pages/loginPage/LoginPage.tsx";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<DefaultRoute />} />
        <Route element={<MainLayout />}>
          <Route path={appRouter.HOME_PAGE} element={<HomePage />} />
          <Route path={appRouter.POST_LIST_PAGE} element={<PostListPage />} />
          <Route
            path={appRouter.POST_LIST_ITEM + `:id`}
            element={<PostListItem />}
          />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path={appRouter.LOGIN_PAGE} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
const DefaultRoute = () => <Navigate to={appRouter.HOME_PAGE} />;

export default MainRouter;
