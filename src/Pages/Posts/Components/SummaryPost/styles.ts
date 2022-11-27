import styled from "styled-components";

export const SummaryPostContainer = styled.div`
  width: 864px;
  height: 168px;
  margin-top: -80px;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
`;

export const HeaderSummaryPost = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme["blue-500"]};
  }
`;

export const TitleSummaryPost = styled.header`
  height: 31px;
  width: 800px;
  margin-top: 1.25rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
`;

export const InfosSummaryPost = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;
  width: 390px;
  height: 26px;
`;

export const InfosDetails = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
