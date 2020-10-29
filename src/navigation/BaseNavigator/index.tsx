import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../../pages/Onboarding';
import SignUp from '../../pages/SignUp';
import Login from '../../pages/Login';
import SuccessRegister from '../../pages/SuccessRegister';
import {colours} from '../../constants';
import {useStateMachineState} from '../../state/StateMachine';
import AuthorisedNavigator from './../AuthorisedNavigator';
import GreetingHeader from '../../components/GreetingHeader';

const BaseStack = createStackNavigator();

export default function BaseNavigator() {
  const current = useStateMachineState();
  const {user, password} = current?.context;

  return (
    <>
      <BaseStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: current.matches('authorised')
              ? colours.secondary
              : colours.primary,
          },
          headerTintColor: colours.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {current.matches('unauthorised') && (
          <BaseStack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              title: '',
            }}
          />
        )}
        {current.matches('signup') && (
          <BaseStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: '',
            }}
          />
        )}
        {current.matches('login') && (
          <BaseStack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
            }}
          />
        )}
        {current.matches('successRegister') && (
          <BaseStack.Screen
            name="SuccessRegister"
            component={SuccessRegister}
            options={{
              title: '',
            }}
          />
        )}
        {current.matches('authorised') && (
          <BaseStack.Screen
            name="AuthorisedNavigator"
            component={AuthorisedNavigator}
            options={{
              title: '',
              headerRight: props => (
                <GreetingHeader title={user} spacing={10} />
              ),
            }}
          />
        )}
      </BaseStack.Navigator>
    </>
  );
}
