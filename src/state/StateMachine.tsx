import React, {useContext} from 'react';
import {Machine, assign} from 'xstate';
import {useMachine} from '@xstate/react';

const stateMachine = Machine({
  id: 'stateMachine',
  initial: 'authorised',
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
            LOGIN: '#stateMachine.login',
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
      initial: 'idle',
      states: {
        idle: {
          on: {
            REGISTER: 'success',
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
            ERROR: 'error',
          },
        },
        error: {
          on: {
            REGISTER: 'success',
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
        success: {
          type: 'final',
        },
      },
      onDone: 'successRegister',
    },
    login: {
      initial: 'idle',
      states: {
        idle: {
          on: {
            LOGIN: 'success',
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
            ERROR: 'error',
          },
        },
        error: {
          on: {
            LOGIN: 'success',
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
        success: {
          type: 'final',
        },
      },
      onDone: 'authorised',
    },
    successRegister: {
      initial: 'idle',
      states: {
        idle: {
          on: {
            DONE: 'success',
          },
        },
        success: {
          type: 'final',
        },
      },
      onDone: 'authorised',
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
