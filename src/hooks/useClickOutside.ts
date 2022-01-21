import { ChangeEvent, useCallback, useRef } from 'react';

import useWindowListener from './useWindowListener';

const useClickOutside = (callback: (e: ChangeEvent<HTMLElement>, element?: HTMLElement) => void) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handler = useCallback(
    (event: ChangeEvent<HTMLElement>) => {
      if (!elementRef.current?.contains(event.target)) {
        callback(event, elementRef.current as HTMLElement);
      }
    },
    [callback]
  );

  useWindowListener('mousedown', handler);

  return elementRef;
};

export default useClickOutside;
