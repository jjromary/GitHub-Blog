import { HeaderSummaryPost, InfosDetails, InfosSummaryPost, SummaryPostContainer, TitleSummaryPost } from "./styles";
import backIcon from '../../../../Assets/backIcon.svg'
import redirectIcon from '../../../../Assets/IconRedirect.svg'

import githubIcon from '../../../../Assets/github.svg'
import calendarIcon from '../../../../Assets/calendarIcon.svg'
import comentsIcon from '../../../../Assets/comentsIcon.svg'

export default function SummaryPost() {
  return (
    <SummaryPostContainer>
      <HeaderSummaryPost>
        <span> <img src={backIcon} /> VOLTAR</span>
        <span>VER NO GITHUB <img src={redirectIcon} /></span>
      </HeaderSummaryPost>

      <TitleSummaryPost>
        JavaScript data types and data structures
      </TitleSummaryPost>

      <InfosSummaryPost>
        <InfosDetails>
          <img src={githubIcon} />jjromary
        </InfosDetails>
        <InfosDetails>
          <img src={calendarIcon} />Há 1 dia
        </InfosDetails>
        <InfosDetails>
          <img src={comentsIcon} />5 comentários
        </InfosDetails>
      </InfosSummaryPost>



    </SummaryPostContainer>
  )
}