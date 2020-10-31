import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useStateMachineState} from '../../state/StateMachine';
import AuthorisedTabsNavigator from '../AuthorisedTabNavigator';
import Transactions from '../../pages/Transactions';

const AuthorisedStack = createStackNavigator();

export default function AuthorisedNavigator() {
  const current = useStateMachineState();

  return (
    <>
      <AuthorisedStack.Navigator>
        {!current.matches('authorised.transactions') && (
          <AuthorisedStack.Screen
            name="AuthorisedTabsNavigator"
            component={AuthorisedTabsNavigator}
          />
        )}
        {current.matches('authorised.transactions') && (
          <AuthorisedStack.Screen
            name="Transactions"
            component={Transactions}
          />
        )}
      </AuthorisedStack.Navigator>
    </>
  );
}
