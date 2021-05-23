import { useReducer, createContext, useContext, ReactNode, ReactElement } from 'react';

import { Reducer } from './reducer';
import { State, Dispatch, initialState } from './types';

const EnrollmentStateContext = createContext<State | undefined>(undefined);
const EnrollmentDispatchContext = createContext<Dispatch | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const EnrollmentProvider = ({ children }: Props): ReactElement => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <EnrollmentStateContext.Provider value={state}>
      <EnrollmentDispatchContext.Provider value={dispatch}>{children}</EnrollmentDispatchContext.Provider>
    </EnrollmentStateContext.Provider>
  );
};

export function useEnrollmentState(): State {
  const context = useContext(EnrollmentStateContext);
  if (context === undefined) {
    throw new Error('useEnrollmentState must be used within a EnrollmentProvider');
  }
  return context;
}
export function useEnrollmentDispatch(): Dispatch {
  const context = useContext(EnrollmentDispatchContext);
  if (context === undefined) {
    throw new Error('useEnrollmentDispatch must be used within a EnrollmentProvider');
  }
  return context;
}
