import styled from "styled-components";
import { theme } from "../../theme/globalStyles";

export const SidebarStyles = {};

SidebarStyles.Container = styled.div`
  width: 242px;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondaryBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 10px;
  position: sticky;

  .company{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items  : flex-start;
    flex: 1;
  }

  svg{
    width: 20px;
    height: 20px;
  }
`;
SidebarStyles.CompanyDetails = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
gap: 12px;
margin: 0 auto;
`
SidebarStyles.Avatar = styled.img`
 width: 39px;
 height: 39px;
 border-radius: 4px;
`
SidebarStyles.CompanyName = styled.p`
align-self: stretch;
font-family: Inter, sans-serif;
font-size: 15px;
color: ${({ theme }) => theme.white};
font-weight: 500;
line-height: 22px;
font-style: normal;
`
SidebarStyles.VisitLink = styled.p`
color: ${({ theme }) => theme.white};
opacity: 0.8;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 16px; 
text-decoration-line: underline;
`
SidebarStyles.List = styled.ul`
display: flex;
justify-content: flex-start;
flex-direction: column;
width: 80%;
list-style: none;
`
SidebarStyles.ListItem = styled.li`
color: ${({ theme }) => theme.white};
font-family: Inter, sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
display: flex;
padding: 8px 16px;
align-items: flex-start;
gap: 12px;
flex: 1;
opacity: 0.8;
`
SidebarStyles.Credit = styled.div`
  width: 90%;
  background-color: ${({theme}) => theme.gray1};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;

.creditbalance{
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2px;
  align-items: flex-start;
}

.wallet{
  width: 30px;
  height: 30px;
  background-color: rgb(72,82,117);
position: relative;
}
`
SidebarStyles.CreditLabel = styled.p`
color: ${({ theme }) => theme.white};
font-family: Inter, sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 16px; 
opacity: 0.8;
`
SidebarStyles.Amount = styled.p`
color: ${({ theme }) => theme.white};
font-family: Inter, sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; 
`