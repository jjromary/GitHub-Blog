import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 3rem;
  gap: 2rem;
`;

export const CardsPost = styled.div`
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 0.625rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
`;

export const HeaderPost = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleHeader = styled.span`
  height: 64px;
  width: 80%;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: ${(props) => props.theme["base-title"]};
`;

export const DatePost = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: ${(props) => props.theme["base-span"]};
`;

export const DescriptionPost = styled.span`
  height: 112px;
  width: 352px;
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme["base-text"]};
`;
