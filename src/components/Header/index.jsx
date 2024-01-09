import React from 'react'
import { Main } from './styles'
import { ReactComponent as Help } from "../../icons/Help.svg";
import { ReactComponent as Chat } from "../../icons/Chat.svg";
import { ReactComponent as Menu } from "../../icons/Menu.svg";


const Header = () => {
  return (
    <Main.Header>
        <Main.PageName>
          Payments{" "}
          <span>
            <Help /> How it works
          </span>
        </Main.PageName>

        <input placeholder="Search features, tutorials, etc." />

        <Main.HeaderMenu>
          <Chat />
          <Menu />
        </Main.HeaderMenu>
      </Main.Header>
  )
}

export default Header