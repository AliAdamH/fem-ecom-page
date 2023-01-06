import React, { useState } from 'react';
import NavigationLinks from './NavigationLinks';
import Cart from './Cart';
import Avatar from './Avatar';
import { ReactComponent as BrandLogo } from '../assets/images/logo.svg';
import { ReactComponent as MenuLogo } from '../assets/images/icon-menu.svg';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-row p-3 md:p-0 md:h-20 md:border-b-[1px] md:border-neutral-grayBlue item-center md:items-stretch gap-10 relative mx-auto">
      <div className="flex items-center gap-4">
        <button className="sm:hidden" onClick={() => setMenuOpen(true)}>
          <MenuLogo />
        </button>
        <BrandLogo />
      </div>
      <NavigationLinks opened={menuOpen} close={() => setMenuOpen(false)} />
      <div className="ml-auto flex gap-4 sm:gap-8 items-center">
        <Cart />
        <Avatar />
      </div>
    </header>
  );
}

export default NavBar;
