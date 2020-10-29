import 'react-native-gesture-handler';
import React, {useCallback} from 'react';
import {StyleSheet, View, Text, BackHandler, Alert} from 'react-native';
import Account from '../../components/Account';
import {useFocusEffect} from '@react-navigation/core';

export default function Balances() {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Exit App',
          'Exiting the application?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {
            cancelable: false,
          },
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return (
    <View>
      <Text style={styles.text}>Please find your account balances below:</Text>
      <View style={styles.baseContainer}>
        <View style={styles.accountContainer}>
          <Account accountType={'Current Account'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingTop: 10,
  },
  baseContainer: {
    padding: 10,
  },
  accountContainer: {
    backgroundColor: 'white',
  },
});
