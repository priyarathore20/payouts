import React from 'react';
import { SidebarStyles } from './styles';
import companyIcon from '../../assets/image.png';
import { ReactComponent as DropdownIcon } from '../../icons/Chevron Down.svg';
import { ReactComponent as Home } from '../../icons/Home.svg';
import { ReactComponent as Orders } from '../../icons/Orders.svg';
import { ReactComponent as Products } from '../../icons/Products.svg';
import { ReactComponent as Delivery } from '../../icons/Delivery.svg';
import { ReactComponent as Marketing } from '../../icons/Marketing.svg';
import { ReactComponent as Analytics } from '../../icons/Analytics.svg';
import { ReactComponent as Payments } from '../../icons/Payments.svg';
import { ReactComponent as Tools } from '../../icons/Tools.svg';
import { ReactComponent as Discounts } from '../../icons/Discounts.svg';
import { ReactComponent as Audience } from '../../icons/Audience.svg';
import { ReactComponent as Appearance } from '../../icons/Appearance.svg';
import { ReactComponent as Plugins } from '../../icons/Plugins.svg';
import { ReactComponent as Wallet } from '../../icons/wallet.svg';

const dashboardItems = [
  {
    name: 'Home',
    Logo: Home,
    isActive: false,
  },
  {
    name: 'Orders',
    Logo: Orders,
    isActive: false,
  },
  {
    name: 'Products',
    Logo: Products,
    isActive: false,
  },
  {
    name: 'Delivery',
    Logo: Delivery,
    isActive: false,
  },
  {
    name: 'Marketing',
    Logo: Marketing,
    isActive: false,
  },
  {
    name: 'Analytics',
    Logo: Analytics,
    isActive: false,
  },
  {
    name: 'Payments',
    Logo: Payments,
    isActive: true,
  },
  {
    name: 'Tools',
    Logo: Tools,
    isActive: false,
  },
  {
    name: 'Discounts',
    Logo: Discounts,
    isActive: false,
  },
  {
    name: 'Audience',
    Logo: Audience,
    isActive: false,
  },
  {
    name: 'Appearance',
    Logo: Appearance,
    isActive: false,
  },
  {
    name: 'Plugins',
    Logo: Plugins,
    isActive: false,
  },
];

const Sidebar = () => {
  return (
    <SidebarStyles.Container>
      <SidebarStyles.CompanyDetails>
        <SidebarStyles.Avatar src={companyIcon} alt="companyIcon" />
        <div className="company">
          <SidebarStyles.CompanyName>Nishyan</SidebarStyles.CompanyName>
          <SidebarStyles.VisitLink>Visit store</SidebarStyles.VisitLink>
        </div>
        <DropdownIcon />
      </SidebarStyles.CompanyDetails>

      <SidebarStyles.List>
        {dashboardItems?.map((item, index) => (
          <SidebarStyles.ListItem key={index} isActive={item?.isActive}>
            <item.Logo /> {item?.name}
          </SidebarStyles.ListItem>
        ))}
      </SidebarStyles.List>

      <SidebarStyles.CreditWrapper>
        <SidebarStyles.Credit>
          <SidebarStyles.CreditWalletIcon>
            <Wallet />
          </SidebarStyles.CreditWalletIcon>
          <SidebarStyles.CreditBalance>
            <SidebarStyles.CreditLabel>
              Available credit
            </SidebarStyles.CreditLabel>
            <SidebarStyles.Amount>222.10</SidebarStyles.Amount>
          </SidebarStyles.CreditBalance>
        </SidebarStyles.Credit>
      </SidebarStyles.CreditWrapper>
    </SidebarStyles.Container>
  );
};

export default Sidebar;
