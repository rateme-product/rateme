import { useEffect } from 'react';

const useWindowListener = (type: string, callback: (e: never) => void, condition = true) => {
  useEffect(() => {
    if (condition) {
      window.addEventListener(type, callback as never);
    }
    return () => {
      if (condition) {
        window.removeEventListener(type, callback as never);
      }
    };
  }, [callback, condition, type]);
};

export default useWindowListener;
