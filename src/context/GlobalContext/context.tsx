import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface GlobalState {
  hasMouse: boolean;
}
interface GlobalActionsState {
  setHasMouse: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalState>({} as GlobalState);
export const GlobalActionsContext = createContext<GlobalActionsState>(
  {} as GlobalActionsState
);
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalActionsContext = () => useContext(GlobalActionsContext);
