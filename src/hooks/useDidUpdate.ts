import React, { useEffect, useRef } from 'react';

const useDidUpdate = (effect: React.EffectCallback, deps?: React.DependencyList): void => {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      return effect();
    } else {
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidUpdate;
