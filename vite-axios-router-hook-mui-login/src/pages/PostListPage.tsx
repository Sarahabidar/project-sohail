import { useNavigate } from "react-router-dom";
import { appRouter } from "../router/appRouter";

const PostListPage = () => {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    //window.location.href = appRouter.HOME_PAGE; this ist vanila javascript, this has same result same next line! but we use there useNavigate!
    navigate(appRouter.HOME_PAGE, {
      replace: true,
    }); //this way is better
  };
  return (
    <div>
      Post List
      <button onClick={handleHomeButton}>Go To Home</button>
    </div>
  );
};

export default PostListPage;
