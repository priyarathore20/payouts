import styled from 'styled-components';

export const PaginationStyles = {};

PaginationStyles.Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 8px;
  padding: 0;

  & > button {
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 16px;
    margin-left: 0;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    display: flex;
    align-items: center;
    padding: 6px 12px 6px 6px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 4px;
    color: ${({ theme }) => theme.black30};
    border: 1px solid ${({ theme }) => theme.black85};
    background: ${({ theme }) => theme.white};
  }
  & > button:last-child {
    padding: 6px 6px 6px 12px;
    margin-left: 16px;
    margin-right: 0;
  }

  & a,
  & span {
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    width: 28px;
    height: 28px;
    padding: 6px 8px;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.black30};

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  & a:hover {
    background-color: ${({ theme }) => theme.primaryBlue};
    color: ${({ theme }) => theme.white};
  }

  & .current {
    background-color: ${({ theme }) => theme.primaryBlue};
    color: ${({ theme }) => theme.white};
    cursor: default;
  }

  & .disabled {
    color: ${({ theme }) => theme.black30};
    cursor: not-allowed;
  }
`;
