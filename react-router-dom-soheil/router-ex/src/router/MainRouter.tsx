import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { appRouter } from "./appRouter";
import HomePage from "../pages/HomePage.tsx";
import PostListPage from "../pages/PostListPage";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import MainLayout from "../layouts/mainLayout/MainLayout.tsx";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<DefaultRoute />} />
        <Route element={<MainLayout />}>
          <Route path={appRouter.HOME_PAGE} element={<HomePage />} />
          <Route path={appRouter.POST_LIST_PAGE} element={<PostListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
const DefaultRoute = () => <Navigate to={appRouter.HOME_PAGE} />;

export default MainRouter;
