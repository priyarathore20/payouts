import styled from "styled-components";

export const Main = {};

Main.Container = styled.main`
  background-color: ${({ theme }) => theme.black85};
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;
