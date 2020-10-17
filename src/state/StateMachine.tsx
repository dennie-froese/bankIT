import React, {useContext} from 'react';
import {Machine, assign} from 'xstate';
import {useMachine} from '@xstate/react';

const stateMachine = Machine({
  id: 'stateMachine',
  initial: 'unauthorised',
  context: {
    user: '',
    password: '',
  },
  states: {
    unauthorised: {
      initial: 'idle',
      states: {
        idle: {
          on: {
            AUTHORISE: 'success',
            INPUT_USER: {
              actions: assign({
                user: (_, event) => event.value,
              }),
            },
            ERROR: 'error',
          },
        },
        error: {
          on: {
            AUTHORISE: 'success',
            INPUT_USER: {
              actions: assign({
                user: (_, event) => event.value,
              }),
            },
          },
        },
        success: {
          type: 'final',
        },
      },
      onDone: 'signup',
    },
    signup: {
      on: {
        REGISTER: 'authorised',
        INPUT_USER: {
          actions: assign({
            user: (_, event) => event.value,
          }),
        },
        INPUT_PASSWORD: {
          actions: assign({
            password: (_, event) => event.value,
          }),
        },
      },
    },
    authorised: {},
  },
});

const StateMachineState = React.createContext<
  {user: string; password: string} | undefined
>(undefined);
const StateMachineDispatch = React.createContext(undefined);

export function StateMachineProvider({children}) {
  const [current, send] = useMachine(stateMachine);
  return (
    <StateMachineState.Provider value={current}>
      <StateMachineDispatch.Provider value={send}>
        {children}
      </StateMachineDispatch.Provider>
    </StateMachineState.Provider>
  );
}

export function useStateMachineState() {
  const context = useContext(StateMachineState);

  return context;
}

export function useStateMachineDispatch() {
  const context = useContext(StateMachineDispatch);

  return context;
}

export default stateMachine;
