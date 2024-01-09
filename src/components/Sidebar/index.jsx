import React from 'react'
import { SidebarStyles } from './styles'
import companyIcon from '../../assets/Image.png'
import { ReactComponent as DropdownIcon } from '../../icons/Chevron Down.svg'
import { ReactComponent as Home } from '../../icons/Home.svg'
import { ReactComponent as Orders} from '../../icons/Orders.svg'
import { ReactComponent as Products} from '../../icons/Products.svg'
import { ReactComponent as Delivery} from '../../icons/Delivery.svg'
import { ReactComponent as Marketing} from '../../icons/Marketing.svg'
import { ReactComponent as Analytics} from '../../icons/Analytics.svg'
import { ReactComponent as Payments} from '../../icons/Payments.svg'
import { ReactComponent as Tools} from '../../icons/Tools.svg'
import { ReactComponent as Discounts} from '../../icons/Discounts.svg'
import { ReactComponent as Audience} from '../../icons/Audience.svg'
import { ReactComponent as Appearance} from '../../icons/Appearance.svg'
import { ReactComponent as Plugins} from '../../icons/Plugins.svg'
import { ReactComponent as Wallet} from '../../icons/wallet.svg'


const Sidebar = () => {
  return (
    <SidebarStyles.Container>
      <SidebarStyles.CompanyDetails>
        <SidebarStyles.Avatar src={companyIcon} alt='companyIcon'/>
        <div className='company'>
          <SidebarStyles.CompanyName>Nishyan</SidebarStyles.CompanyName>
          <SidebarStyles.VisitLink>Visit store</SidebarStyles.VisitLink>
        </div>
          <DropdownIcon />
      </SidebarStyles.CompanyDetails>

      <SidebarStyles.List>
        <SidebarStyles.ListItem><Home /> Home</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Orders /> Orders</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Products /> Products</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Delivery /> Delivery</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Marketing /> Marketing</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Analytics /> Analytics</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Payments /> <b>Payments</b></SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Tools /> Tools</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Discounts /> Discounts</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Audience /> Audience</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Appearance /> Appearance</SidebarStyles.ListItem>
        <SidebarStyles.ListItem><Plugins /> Plugins</SidebarStyles.ListItem>
      </SidebarStyles.List>

      <SidebarStyles.Credit>
        <div className="wallet">
        <Wallet />
        </div> 
        <div className="creditbalance">
          <SidebarStyles.CreditLabel>Available credit</SidebarStyles.CreditLabel>
          <SidebarStyles.Amount>222.10</SidebarStyles.Amount>
        </div>
      </SidebarStyles.Credit>
    </SidebarStyles.Container>
  )
}

export default Sidebar