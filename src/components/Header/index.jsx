import React from 'react';
import { Main } from './styles';
import { ReactComponent as Help } from '../../icons/Help.svg';
import { ReactComponent as Chat } from '../../icons/Chat.svg';
import { ReactComponent as Menu } from '../../icons/Menu.svg';
import Input from '../Input';

const Header = () => {
  return (
    <Main.Header>
      <Main.PageName>
        Payments{' '}
        <span>
          <Help /> How it works
        </span>
      </Main.PageName>

      <Main.SearchBar>
        <Input
          fullWidth
          showSearchIcon
          placeholder="Search features, tutorials, etc."
        />
      </Main.SearchBar>

      <Main.HeaderMenu>
        <Chat />
        <Menu />
      </Main.HeaderMenu>
    </Main.Header>
  );
};

export default Header;
