import PostArea from "./Components/PostArea/indext";
import SummaryPost from "./Components/SummaryPost/indext";
import { PostsContainer } from "./styles";

export default function Posts() {
  return (
    <PostsContainer>
      <SummaryPost />
      <PostArea />
    </PostsContainer>
  )
}