import { About, ContentLeft, ContentRight, Infos, SummaryUserContainer, SummaryUserContent, Title, RedirectContent, RedirectButton, InfosDetails } from "./styles";
import pacoca from '../../Assets/pacoca.jpg'
import githubIcon from '../../Assets/github.svg'
import company from '../../Assets/company.svg'
import followers from '../../Assets/followers.svg'
import redirect from "../../Assets/IconRedirect.svg"
import { useEffect, useState } from "react";
import { api } from "../../Libs/axios";

interface User {
  name: string;
  avatar_url: string
  bio: string;
  login: string;
  company?: string;
  followers: number;
  html_url: string;
}

export default function SummaryUser() {

  const [dataUser, setDataUser] = useState<User>(Object);

  async function getDataUser() {
    const response = await api.get('/users/jjromary')

    setDataUser(response.data)
  }

  useEffect(() => {
    getDataUser()
  }, [])

  return (
    <SummaryUserContainer>
      <SummaryUserContent>
        <ContentLeft>
          <img src={dataUser.avatar_url} style={{ width: "148px", height: "148px", borderRadius: '8px' }} />
        </ContentLeft>

        <ContentRight>
          <RedirectContent>
            <Title>{dataUser.name} </Title>
            <RedirectButton>
              GITHUB
              <a href={dataUser?.html_url}>
                <img src={redirect} />
              </a>
            </RedirectButton>
          </RedirectContent>
          <About>{dataUser.bio}</About>
          <Infos>
            <InfosDetails>
              <img src={githubIcon} />
              {dataUser?.login}
            </InfosDetails>
            <InfosDetails>
              <img src={company} />
              {dataUser?.company ? dataUser?.company : "Romary Soluções Tecnológicas"}
            </InfosDetails>
            <InfosDetails>
              <img src={followers} />
              {dataUser.followers}
            </InfosDetails>
          </Infos>
        </ContentRight>
      </SummaryUserContent>
    </SummaryUserContainer>
  )
}