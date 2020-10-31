import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Balances from '../../pages/Balances';
import Settings from '../../pages/Settings';
import {colours} from '../../constants';
import BalancesIcon from '../../icons/Balances';
import SettingsIcon from '../../icons/Settings';

const AuthorisedTabs = createBottomTabNavigator();

export default function AuthorisedTabsNavigator() {
  return (
    <>
      <AuthorisedTabs.Navigator
        tabBarOptions={{
          activeTintColor: colours.primary,
          inactiveTintColor: 'darkgrey',
          allowFontScaling: true,
          labelStyle: {fontSize: 16, padding: 20},
          style: {
            borderTopColor: colours.primary,
            borderTopWidth: 1,
            paddingTop: 10,
          },
        }}>
        <AuthorisedTabs.Screen
          name="Balances"
          component={Balances}
          options={{
            tabBarIcon: ({color}) => (
              <BalancesIcon width={20} height={20} colour={color} />
            ),
          }}
        />
        <AuthorisedTabs.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color}) => (
              <SettingsIcon width={20} height={20} colour={color} />
            ),
          }}
        />
      </AuthorisedTabs.Navigator>
    </>
  );
}
