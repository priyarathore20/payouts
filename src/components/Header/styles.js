import styled from "styled-components";

export const Main = {};

Main.Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
  background-color: ${({ theme }) => theme.white};

  input {
    display: flex;
    width: 400px;
    padding: 9px 16px;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    align-self: stretch;
    background-color: ${({ theme }) => theme.black95};
    border-radius: 6px;
    outline: none;
    border: none;
  }
`;
Main.PageName = styled.p`
  color: ${({ theme }) => theme.black12};
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  display: flex;
  gap: 16px;

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
Main.HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
`;
