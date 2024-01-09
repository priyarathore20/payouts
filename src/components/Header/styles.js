import styled from 'styled-components';

export const Main = {};

Main.Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.black85};
`;

Main.PageName = styled.p`
  color: ${({ theme }) => theme.black12};
  font-family: Inter, sans-serif;
  display: flex;
  gap: 16px;

  font-size: 15px;
  font-weight: 400;
  line-height: 22px;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.black30};
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;

Main.SearchBar = styled.div`
  width: 400px;
`;

Main.HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
`;
