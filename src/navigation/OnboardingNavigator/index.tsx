import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../../pages/Onboarding';
import SignUp from '../../pages/SignUp';
import Login from '../../pages/Login';
import {colours} from '../../constants';
import {useStateMachineState} from '../../state/StateMachine';

const HomeStack = createStackNavigator();

export default function OnboardingNavigator() {
  const current = useStateMachineState();

  return (
    <>
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colours.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {current.matches('unauthorised') && (
          <HomeStack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              title: '',
            }}
          />
        )}
        {current.matches('signup') && (
          <HomeStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: '',
            }}
          />
        )}
        {current.matches('login') && (
          <HomeStack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
            }}
          />
        )}
      </HomeStack.Navigator>
    </>
  );
}
