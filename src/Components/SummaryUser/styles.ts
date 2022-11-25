import styled from "styled-components";

export const SummaryUserContainer = styled.div`
  position: absolute;
  width: 864px;
  height: 212px;
  left: calc(50% - 864px / 2);
  top: 208px;

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const SummaryUserContent = styled.div`
  padding: 2rem 2rem 2rem 2.5rem;
  display: flex;
  flex-direction: row;
`;

export const ContentLeft = styled.div``;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const RedirectContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RedirectButton = styled.button`
  width: 67px;
  height: 19px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["blue-500"]};
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
  cursor: default;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.div`
  margin-top: 0.5rem;
  width: 80%;
  height: 31px;
  left: 220px;
  top: calc(50% - 31px / 2 - 50.5px);
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const About = styled.div`
  margin-top: 0.5rem;
  width: 612px;
  height: 52px;
  /* left: 220px;
  top: 79px; */
  line-height: 160%;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;

  position: absolute;
  width: 493px;
  height: 26px;
  left: 220px;
  top: calc(50% - 26px / 2 + 62px);

  img {
    margin-right: 0.5rem;
  }
`;

export const InfosDetails = styled.div`
  display: flex;
  align-items: center;
`;
