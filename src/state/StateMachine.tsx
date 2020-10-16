import React from 'react';
import {Machine, assign} from 'xstate';

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
              actions: assign({user: (_, event) => event.value}),
            },
            ERROR: 'error',
          },
        },
        error: {
          on: {
            AUTHORISE: 'success',
            INPUT_USER: {
              actions: assign({user: (_, event) => event.value}),
            },
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

export default stateMachine;

export const StateMachineProvider = React.createContext(null);
