import React, { useState } from 'react';
import { useMediaSize } from '../hooks/useMediaSize';
import DesktopCarousel from './DesktopCarousel';
import MobileCarousel from './MobileCarousel';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Carousel() {
  const [openModal, setOpenModal] = useState(false);
  const { matchSize } = useMediaSize({ value: 764 });
  return matchSize ? (
    <>
      <DesktopCarousel openLightBox={() => setOpenModal(true)} />
      <Modal
        isOpen={openModal}
        style={{
          overlay: { backgroundColor: 'rgba(0,0,0, 0.6)' },
          content: {
            background: 'transparent',
            width: 'fit-content',
            border: 'none',
            margin: '0 auto',
            overflow: 'hidden',
            padding: '0 1rem',
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
          },
        }}
        onRequestClose={() => setOpenModal(false)}
      >
        <div className="p-2 flex justify-end">
          <button
            onClick={() => setOpenModal(false)}
            className="hover:text-primary-orange text-4xl"
          >
            &times;
          </button>
        </div>
        <DesktopCarousel withToggles={true} />
      </Modal>
    </>
  ) : (
    <MobileCarousel />
  );
}

export default Carousel;
