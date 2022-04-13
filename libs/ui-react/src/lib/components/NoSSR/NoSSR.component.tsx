/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';

export const NoSSR: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <>{children}</> : <></>;
};
