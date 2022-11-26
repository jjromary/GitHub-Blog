import SummaryUser from "../../Components/SummaryUser";
import SearchPost from "./Components/SearchPosts";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <SummaryUser />
      <SearchPost />
    </HomeContainer>
  )
}