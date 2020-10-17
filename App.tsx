import React from 'react';
import {StateMachineProvider} from './src/state/StateMachine';
import Onboarding from './src/pages/Onboarding';

export default function App() {
  return (
    <StateMachineProvider>
      <Onboarding />
    </StateMachineProvider>
  );
}
