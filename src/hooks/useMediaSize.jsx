import React from 'react';
import debounce from 'lodash.debounce';

export const useMediaSize = ({ value }) => {
  // useRef so we don't create a mediaObject at each rerender.
  const mediaObject = React.useRef(
    window.matchMedia(`(min-width: ${value}px)`)
  );
  const [matchSize, setMatchSize] = React.useState(mediaObject.current.matches);

  const updateOnResize = () => setMatchSize(mediaObject.current.matches);

  React.useEffect(() => {
    const MQLOBJECT = mediaObject.current;
    const handleWindowResize = debounce(updateOnResize, 300);
    MQLOBJECT.addEventListener('change', handleWindowResize);
    return () => MQLOBJECT.removeEventListener('change', handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { matchSize };
};
