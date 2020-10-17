import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../../pages/Onboarding';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
    </HomeStack.Navigator>
  );
}
