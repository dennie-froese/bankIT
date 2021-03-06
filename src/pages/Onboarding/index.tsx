import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {colours, spacing, borderRadii} from '../../constants';
import StateMachineProvider, {
  useStateMachineState,
  useStateMachineDispatch,
} from '../../state/StateMachine';

export default function Onboarding() {
  const current = useStateMachineState();
  const send = useStateMachineDispatch();
  const user = current?.context.user;

  const register = () => {
    user && user.includes('@') && user.includes('.')
      ? send('AUTHORISE')
      : send('ERROR');
  };

  const goToLogin = () => {
    send('LOGIN');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.textHeader}>Welcome to BankIT!</Text>
          <Text style={styles.textSubheader}>
            Sign up to BankIT using your email address below:
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: current.matches('unauthorised.error')
                ? colours.danger
                : 'black',
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 20,
            }}>
            <TextInput
              style={{
                textAlign: 'center',
                width: 250,
                padding: 10,
                color: current.matches('unauthorised.error')
                  ? colours.danger
                  : 'black',
              }}
              autoCapitalize="none"
              onChangeText={e => send('INPUT_USER', {value: e})}
              value={user}
              placeholder={'Enter your user email address'}
            />
          </View>
          {current.matches('unauthorised.error') ? (
            <Text style={{color: colours.danger, fontStyle: 'italic'}}>
              Please check your email address above.
            </Text>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Sign me up!"
          onPress={register}
          colourText={colours.white}
          colourBackground={colours.primary}
          spacing={spacing.m}
          borderRadius={borderRadii.xl}
        />
        <TouchableOpacity style={{padding: 20}} onPress={goToLogin}>
          <Text style={{textDecorationLine: 'underline'}}>
            I already have an account!
          </Text>
        </TouchableOpacity>
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
