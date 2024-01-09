import styled from 'styled-components';

export let Overview = {};

Overview.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
Overview.Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
Overview.TitleName = styled.p`
  color: ${({ theme }) => theme.black12};
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;
Overview.SortingDropdown = styled.div`
  padding: 6px 14px;
  display: flex;
  gap: 7px;
  align-items: center;
  cursor: pointer;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.black85};
  background: ${({ theme }) => theme.white};
`;
Overview.Cards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;
Overview.Card = styled.div`
  display: flex;
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
`;
Overview.CardLabel = styled.p`
  color: ${({ theme }) => theme.black30};
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
Overview.CardValue = styled.p`
  color: ${({ theme }) => theme.black12};
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
`;
