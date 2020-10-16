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
      on: {
        AUTHORISE: 'authorised',
        INPUT_USER: {
          actions: assign({user: (_, event) => event.value}),
        },
      },
    },
    authorised: {},
  },
});

export default stateMachine;

export const StateMachineProvider = React.createContext(null);
