import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colours, spacing, borderRadii} from '../../constants';
import {
  useStateMachineState,
  useStateMachineDispatch,
} from '../../state/StateMachine';
import PrimaryButton from '../../components/PrimaryButton';

export default function Balances() {
  const current = useStateMachineState();
  const send = useStateMachineDispatch();
  const {user, password} = current?.context;

  const goToAccount = () => {
    send('DONE');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textHeader}>BLABALA!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
