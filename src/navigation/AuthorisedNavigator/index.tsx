import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Balances from '../../pages/Balances';
import Settings from '../../pages/Settings';
import {colours} from '../../constants';
import {useStateMachineState} from '../../state/StateMachine';
import BalancesIcon from '../../icons/Balances';
import SettingsIcon from '../../icons/Settings';

const AuthorisedStack = createBottomTabNavigator();

export default function AuthorisedNavigator() {
  const current = useStateMachineState();

  return (
    <>
      <AuthorisedStack.Navigator
        tabBarOptions={{
          activeTintColor: colours.secondary,
          inactiveTintColor: colours.primary,
          // tabStyle: {paddingTop: 10},
          allowFontScaling: true,
          labelStyle: {fontSize: 16, padding: 20},
          style: {
            borderTopColor: colours.secondary,
            borderTopWidth: 1,
            paddingTop: 10,
          },
        }}>
        <AuthorisedStack.Screen
          name="Balances"
          component={Balances}
          options={{
            tabBarIcon: ({color}) => (
              <BalancesIcon width={20} height={20} colour={color} />
            ),
          }}
        />
        <AuthorisedStack.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color}) => (
              <SettingsIcon width={20} height={20} colour={color} />
            ),
          }}
        />
      </AuthorisedStack.Navigator>
    </>
  );
}
