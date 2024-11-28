import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostListPage from "../pages/PostListPage";
import { appRouter } from "./appRouter";
import MainLayout from "../layout/MainLayout";
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={appRouter.HOME_PAGE} element={<HomePage />} />
          <Route path={appRouter.POST_LIST_PAGE} element={<PostListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
