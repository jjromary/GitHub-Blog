import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #0b1b2b;
  height: 296px;
  display: flex;
`;

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TopContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomContent = styled.div``;

export const LightBar = styled.div`
  width: 891px;
  height: 52px;
  left: calc(50% - 891px / 2 - 2.5px);
  top: 235px;

  background: #14589c;
  filter: blur(106px);
`;
