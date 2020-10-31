import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {colours} from '../../constants';
import FurtherAccountDetails from '../../components/FurtherAccountDetails';
import Account from '../../components/Account';

export default function Transactions() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <Account accountType={'Current Account'} disabled />
        <FurtherAccountDetails />
      </View>
      <View style={{backgroundColor: colours.grey, padding: 10}}>
        <Text style={styles.transactionsHeaderText}>Transactions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'white',
  },
  topContainer: {
    padding: 10,
  },
  transactionsHeaderText: {
    fontSize: 16,
  },
});
