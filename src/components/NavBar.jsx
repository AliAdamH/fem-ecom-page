import React, { useState } from 'react';
import NavigationLinks from './NavigationLinks';
import Cart from './Cart';
import Avatar from './Avatar';
import { ReactComponent as BrandLogo } from '../assets/images/logo.svg';
import { ReactComponent as MenuLogo } from '../assets/images/icon-menu.svg';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-row p-3 md:p-8 md:border-b-2 md:border-neutral-grayBlue max-w-6xl item-center gap-4 relative mx-auto">
      <div className="flex items-center gap-4">
        <button className="sm:hidden" onClick={() => setMenuOpen(true)}>
          <MenuLogo />
        </button>
        <BrandLogo />
      </div>
      <NavigationLinks opened={menuOpen} close={() => setMenuOpen(false)} />
      <div className="ml-auto flex gap-4">
        <Cart />
        <Avatar />
      </div>
    </header>
  );
}

export default NavBar;
