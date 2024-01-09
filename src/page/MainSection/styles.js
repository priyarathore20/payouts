import styled from 'styled-components';

export const Main = {};

Main.Container = styled.main`
  background-color: ${({ theme }) => theme.black98};
  flex: 1;
  height: 100vh;
  overflow-y: auto;
`;

Main.Content = styled.div`
  padding: 36px 32px 32px;
`;
