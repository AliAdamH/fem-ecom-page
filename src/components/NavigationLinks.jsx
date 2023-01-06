import React from 'react';
import { ReactComponent as CloseIcon } from '../assets/images/icon-close.svg';
const LINKS = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function NavigationLinks({ opened, close }) {
  return (
    <>
      {opened ? (
        <div className="fixed inset-0 bg-black/75 z-10">
          <nav
            className={'flex w-3/5 h-full p-4 bg-neutral-white flex-col gap-10'}
          >
            <button onClick={() => close()}>
              <CloseIcon />
            </button>
            <ul className="flex-1 flex flex-col gap-4 sm:flex-row text-neutral-darkBlue font-bold">
              {LINKS.map((link, index) => {
                return <li key={index}>{link}</li>;
              })}
            </ul>
          </nav>
        </div>
      ) : (
        <nav className="hidden sm:flex">
          <ul className="flex flex-col gap-4 sm:flex-row text-neutral-darkGrayBlue font-bold sm:font-normal">
            {LINKS.map((link, index) => {
              return (
                <li
                  key={index}
                  className="hover:text-neutral-darkBlue relative flex items-center before:bottom-0 before:p-[2px] before:w-full before:absolute hover:before:bg-primary-orange transition-colors"
                >
                  <button> {link}</button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavigationLinks;
