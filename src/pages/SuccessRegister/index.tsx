import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colours, spacing, borderRadii} from '../../constants';
import {
  useStateMachineState,
  useStateMachineDispatch,
} from '../../state/StateMachine';
import PrimaryButton from '../../components/PrimaryButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SuccessRegister() {
  const current = useStateMachineState();
  const send = useStateMachineDispatch();
  const {user, password} = current?.context;

  const goToAccount = () => {
    send('DONE');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.textHeader}>Success!</Text>
          <Text style={styles.textHeader}>Welcome to BankIT</Text>
          <Text style={styles.textSubheader}>
            You successfully signed up to BankIT. Let's check out your account.
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Go to my new account!"
          onPress={goToAccount}
          colourText={colours.white}
          colourBackground={colours.primary}
          spacing={spacing.m}
          borderRadius={borderRadii.xl}
        />
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
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  inputsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textSubheader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    color: 'grey',
  },
  text: {
    textAlign: 'center',
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
