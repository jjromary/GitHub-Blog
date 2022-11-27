import SummaryUser from "../../Components/SummaryUser";
import Cards from "./Components/Cards";
import SearchPost from "./Components/SearchPosts";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <SummaryUser />
      <SearchPost />
      <Cards />
    </HomeContainer>
  )
}