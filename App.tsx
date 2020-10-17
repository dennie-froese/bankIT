import 'react-native-gesture-handler';
import React from 'react';
import {StateMachineProvider} from './src/state/StateMachine';
import HomeNavigator from './src/navigation/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <StateMachineProvider>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </StateMachineProvider>
  );
}
