import { HeaderContainer, HeaderContent, LightBar, BottomContent, TopContent } from "./styles";
import LogoImg from '../../Assets/logo.svg'
import effectLeft from '../../Assets/effect-left.svg'
import effectRight from '../../Assets/effect-right.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <TopContent>
          <img src={effectLeft} style={{ marginTop: "70px" }}></img>
          <img src={LogoImg}></img>
          <img src={effectRight} style={{ marginTop: "30px" }}></img>
        </TopContent>
        <BottomContent>
          <LightBar />
        </BottomContent>
      </HeaderContent>

    </HeaderContainer>
  )
}