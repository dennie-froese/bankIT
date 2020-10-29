import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProgressBar from '../ProgressBar';
import {colours} from '../../constants';

interface Props {
  accountType: string;
  disabled?: boolean;
}

export default function Account({accountType, disabled = false}: Props) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableHighlight
        style={{...styles.accountHeader, borderColor: colours.primary}}
        disabled={disabled}
        onPress={() => {
          // navigation.navigate('Transactions', {
          //   accountType,
          // });
          null;
        }}>
        <>
          <Text style={styles.accountType}>{accountType}</Text>
          <Text>33-20-44</Text>
          <Text>45238934</Text>
        </>
      </TouchableHighlight>
      <View style={styles.accountBalances}>
        <View style={styles.accountDetails}>
          <Text>Arranged Overdraft:</Text>
          <Text>Available Balance:</Text>
        </View>
        <View style={styles.accountValues}>
          <Text style={styles.textValue}>£200.10</Text>
          <Text>£2,000.00</Text>
          <Text>£200.10</Text>
        </View>
      </View>
      {disabled ? (
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <ProgressBar />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  accountHeader: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    padding: 10,
    alignContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  accountType: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  accountBalances: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountDetails: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 10,
  },
  accountValues: {
    alignItems: 'flex-end',
    padding: 10,
  },
  textValue: {
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 20,
  },
});
