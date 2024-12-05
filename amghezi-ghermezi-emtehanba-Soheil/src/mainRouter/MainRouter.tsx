import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { appRouter } from "./appRouter";
import HomePage from "../pages/HomePage";
import PostListPage from "../pages/PostListPage";
import MainLayout from "../mainLayout/MainLayout";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}></Route>
          <Route element={<MainLayout />}>
            <Route path={appRouter.HOME_PAGE} element={<HomePage />} />
            <Route path={appRouter.POST_LIST_PAGE} element={<PostListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
const DefaultPage = () => <Navigate to={appRouter.HOME_PAGE} />;
export default MainRouter;
