import { useParams } from "react-router-dom";

const PostItemPage = () => {
  const params = useParams();
  return <div>Post List Item Page {params.id}</div>;
};

export default PostItemPage;
