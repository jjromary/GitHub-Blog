import { About, ContentLeft, ContentRight, Infos, SummaryUserContainer, SummaryUserContent, Title, RedirectContent, RedirectButton, InfosDetails } from "./styles";
import pacoca from '../../Assets/pacoca.jpg'
import githubIcon from '../../Assets/github.svg'
import company from '../../Assets/company.svg'
import followers from '../../Assets/followers.svg'
import redirect from "../../Assets/IconRedirect.svg"
export default function SummaryUser() {
  return (
    <SummaryUserContainer>
      <SummaryUserContent>

        <ContentLeft>
          <img src={pacoca} style={{ width: "148px", height: "148px", borderRadius: '8px' }} />

        </ContentLeft>

        <ContentRight>
          <RedirectContent>
            <Title>José Romary Brandão </Title>
            <RedirectButton>
              GITHUB
              <a href="https://github.com/jjromary">
                <img src={redirect} />
              </a>
            </RedirectButton>
          </RedirectContent>
          <About>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </About>
          <Infos>
            <InfosDetails>
              <img src={githubIcon} />jjromary
            </InfosDetails>
            <InfosDetails>
              <img src={company} />Romary Soluções Tencológicas
            </InfosDetails>
            <InfosDetails>
              <img src={followers} />1 bilhão
            </InfosDetails>
          </Infos>
        </ContentRight>
      </SummaryUserContent>
    </SummaryUserContainer>
  )
}