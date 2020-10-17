import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colours, spacing, borderRadii} from '../../constants';
import {
  useStateMachineState,
  useStateMachineDispatch,
} from '../../state/StateMachine';
import PrimaryButton from '../../components/PrimaryButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SignUp() {
  const current = useStateMachineState();
  const send = useStateMachineDispatch();
  const {user, password} = current?.context;

  const signup = () => {
    console.warn(user);
    console.warn(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.textHeader}>Sign up to BankIT</Text>
          <Text style={styles.textSubheader}>
            Create your account using your email address below:
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: current.matches('unauthorised.error')
                ? 'red'
                : 'black',
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 20,
            }}>
            <TextInput
              style={{
                textAlign: 'center',
                width: 250,
                padding: 10,
              }}
              onChangeText={e => send('INPUT_USER', {value: e})}
              value={user}
              placeholder={'Enter your user email address'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: current.matches('unauthorised.error')
                ? 'red'
                : 'black',
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 20,
            }}>
            <TextInput
              style={{
                textAlign: 'center',
                width: 250,
                padding: 10,
              }}
              secureTextEntry={true}
              onChangeText={e => send('INPUT_PASSWORD', {value: e})}
              value={password}
              placeholder={'Enter your password'}
            />
          </View>
          <View />
          {current.matches('unauthorised.error') ? (
            <Text>Please enter your email address</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Create my account!"
          onPress={signup}
          colourText={colours.white}
          colourBackground={colours.primary}
          spacing={spacing.m}
          borderRadius={borderRadii.xl}
        />
        <TouchableOpacity style={{padding: 20}} onPress={() => null}>
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
