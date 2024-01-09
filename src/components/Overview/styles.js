import styled from "styled-components";

export let Overview = {};

Overview.Container = styled.div`
  display: flex;
  padding: 12px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
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
Overview.Month = styled.button`
  width: 137px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.black85};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
