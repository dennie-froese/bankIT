import 'react-native-gesture-handler';
import React from 'react';
import {StateMachineProvider} from './src/state/StateMachine';
import BaseNavigator from './src/navigation/BaseNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <StateMachineProvider>
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
    </StateMachineProvider>
  );
}
