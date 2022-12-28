import React from 'react';
import { useMediaSize } from '../hooks/useMediaSize';
import DesktopCarousel from './DesktopCarousel';
import MobileCarousel from './MobileCarousel';

function Carousel() {
  const { matchSize } = useMediaSize({ value: 764 });
  return matchSize ? <DesktopCarousel /> : <MobileCarousel />;
}

export default Carousel;
