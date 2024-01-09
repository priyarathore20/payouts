import styled from 'styled-components';
export const SidebarStyles = {};

SidebarStyles.Container = styled.div`
  width: 224px;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondaryBlue};
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 16px 10px;
  position: sticky;

  .company {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    gap: 4px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
SidebarStyles.CompanyDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0 8.5px;
`;
SidebarStyles.Avatar = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 4px;
`;
SidebarStyles.CompanyName = styled.p`
  align-self: stretch;
  font-family: Inter, sans-serif;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  line-height: 22px;
  font-style: normal;
`;
SidebarStyles.VisitLink = styled.p`
  color: ${({ theme }) => theme.white};
  opacity: 0.8;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-decoration-line: underline;
  cursor: pointer;
`;
SidebarStyles.List = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  list-style: none;
`;
SidebarStyles.ListItem = styled.li`
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  border-radius: 4px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 12px;
  opacity: 0.8;
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(255, 255, 255, 0.10)' : 'none'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
SidebarStyles.CreditWrapper = styled.div`
  padding: 0 6px;
`;
SidebarStyles.Credit = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.gray1};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
`;

SidebarStyles.CreditBalance = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2px;
  align-items: flex-start;
`;

SidebarStyles.CreditWalletIcon = styled.div`
  padding: 6px;
  border-radius: 4px;
  background-color: rgb(72, 82, 117);

  display: flex;
  align-items: center;
  justify-content: center;
`;

SidebarStyles.CreditLabel = styled.p`
  color: ${({ theme }) => theme.white};
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  opacity: 0.8;
`;

SidebarStyles.Amount = styled.p`
  color: ${({ theme }) => theme.white};
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
