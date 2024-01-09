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
display: flex;
flex-direction: column;
width: 1128px;
padding: 10px 12px;
gap: 40px;
`;
TransactionsStyles.TableRow = styled.tr``;
