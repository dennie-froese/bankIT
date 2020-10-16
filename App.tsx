import React from 'react';
import {useMachine} from '@xstate/react';
import stateMachine, {StateMachineProvider} from './src/state/StateMachine';
import Onboarding from './src/pages/Onboarding';

export default function App() {
  const [current, send] = useMachine(stateMachine);

  return (
    <StateMachineProvider.Provider value={[current, send]}>
      <Onboarding />
    </StateMachineProvider.Provider>
  );
}
