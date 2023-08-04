import React, { ReactNode, useEffect, useState } from 'react';
import { GlobalActionsContext, GlobalContext } from './context';

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    if (matchMedia('(pointer:fine)').matches) {
      console.log('device has mouse');
      setHasMouse(true);
    }
  }, []);

  return (
    <GlobalActionsContext.Provider value={{ setHasMouse }}>
      <GlobalContext.Provider value={{ hasMouse }}>
        {children}
      </GlobalContext.Provider>
    </GlobalActionsContext.Provider>
  );
};

export default GlobalContextProvider;
