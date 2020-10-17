import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../../pages/Onboarding';
import {colours} from '../../constants';

const HomeStack = createStackNavigator();

export default function OnboardingNavigator() {
  return (
    <>
      <HomeStack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerStyle: {
            backgroundColor: colours.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <HomeStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: '',
          }}
        />
      </HomeStack.Navigator>
    </>
  );
}
