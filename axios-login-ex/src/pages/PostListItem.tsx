import { useParams } from "react-router-dom";

const PostListItem = () => {
  const params = useParams();
  return <div>Post List Item View {params.id}</div>;
};

export default PostListItem;
