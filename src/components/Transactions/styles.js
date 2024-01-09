import styled from "styled-components";

export let TransactionsStyles = {};

TransactionsStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 12px 32px;

  input {
    display: flex;
    padding: 10px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.black85};
    background: ${({ theme }) => theme.white};
    width: 248px;
    margin-left: 12px;
  }

  .options-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    padding: 12px;
  }
`;
TransactionsStyles.Title = styled.p`
  color: ${({ theme }) => theme.black12};
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

TransactionsStyles.Options = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
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
`;

TransactionsStyles.Download = styled.button`
  width: 36px;
  background: ${({ theme }) => theme.white};
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.black85};
`;

TransactionsStyles.Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: ${({ theme }) => theme.white};

  th,
  td {
    padding: 14px 12px;
    text-align: left;
  }

  th {
    width: calc(100% / 4);
    color: ${({ theme }) => theme.black30};
    font-family: Inter,sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    background-color: ${({ theme }) => theme.black95};
  }

  td {
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
    border-bottom: 1px solid #e6e6e6;
  }

  .text-right{
    text-align: right;
  }
  .text-center{
    text-align: center;
  }
`;
TransactionsStyles.TableRow = styled.tr``;
