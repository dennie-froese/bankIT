import 'react-native-gesture-handler';
import React from 'react';
import {StateMachineProvider} from './src/state/StateMachine';
import OnboardingNavigator from './src/navigation/OnboardingNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <StateMachineProvider>
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>
    </StateMachineProvider>
  );
}
