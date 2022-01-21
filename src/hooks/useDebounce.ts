import { useCallback, useRef } from 'react';

const useDebounce = <T>(callback: (...args: T[]) => void, wait = 0) => {
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  return useCallback(
    (...args) => {
      ref.current && clearTimeout(ref.current);
      ref.current = setTimeout(() => callback(...args), wait);
    },
    [callback, wait]
  );
};
export default useDebounce;
