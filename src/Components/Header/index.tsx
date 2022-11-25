import { HeaderContainer, HeaderContent } from "./styles";
import LogoImg from '../../Assets/logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg}></img>
      </HeaderContent>

    </HeaderContainer>
  )
}