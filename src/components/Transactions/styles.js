import styled from "styled-components";

export let TransactionsStyles = {};

TransactionsStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 32px;
`;

TransactionsStyles.Title = styled.p`
  color: ${({ theme }) => theme.black12};
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`;

TransactionsStyles.Content = styled.div`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
`;

TransactionsStyles.Options = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .options-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
  }
`;

TransactionsStyles.Sort = styled.button`
  display: flex;
  padding: 6px 12px;
  align-items: center;
  height: 36px;
  gap: 6px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.black85};
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black30};
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

TransactionsStyles.Download = styled.button`
  width: 36px;
  background: ${({ theme }) => theme.white};
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.black85};
  cursor: pointer;
`;

TransactionsStyles.Table = styled.table`
  margin-top: 12px;
  border-collapse: collapse;
  width: 100%;
  background-color: ${({ theme }) => theme.white};

  th,
  td {
    text-align: left;
  }

  th {
    padding: 10px 12px;
    border-radius: 4px;
    width: calc(100% / 4);
    color: ${({ theme }) => theme.black30};
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    background-color: ${({ theme }) => theme.black95};
    vertical-align: middle;
    /* display: flex; */
    /* align-items: center; */

    /* padding: 10px; */

    > div {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    & .arrow {
      font-size: 8px;
    }
  }

  td {
    padding: 14px 12px;
    color: ${({ theme }) => theme.black12};
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  td > a {
    color: ${({ theme }) => theme.primaryBlue};
    text-decoration: none;
  }

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.black90};
  }

  .text-right {
    text-align: right;
    justify-content: flex-end;
  }
  .text-center {
    text-align: center;
    justify-content: center;
  }
`;

TransactionsStyles.PaginationContainer = styled.div`
  width: 100%;
  justify-content: center;
  margin-top: 24px;
`;
