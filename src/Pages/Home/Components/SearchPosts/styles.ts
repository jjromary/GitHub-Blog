import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 72px;

  input {
    height: 50px;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid #1c2f41;
    border-radius: 0.375rem;
    margin-top: 0.5rem;

    &::placeholder {
      padding-left: 1rem;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: ${(props) => props.theme["bale-label"]};
    }
  }
`;

export const HeaderSearch = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const NumberPost = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  color: ${(props) => props.theme["base-span"]};
`;
