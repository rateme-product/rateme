import { useCallback, useRef } from 'react';

const useThrottle = <T>(callback: (...restOfName: T[]) => void, delay: number) => {
  const ref = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    (...args) => {
      ref.current && clearTimeout(ref.current);
      ref.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

export default useThrottle;
