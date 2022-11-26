import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["blue-500"]};
  flex-direction: column;
`;

export const ContainerPages = styled.main`
  width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
