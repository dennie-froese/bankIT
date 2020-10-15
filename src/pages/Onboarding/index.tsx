import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {colours, spacing, borderRadii} from '../../constants';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.textHeader}>Welcome to BanKing!</Text>
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
              borderColor: 'black',
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 20,
            }}>
            <TextInput
              style={{
                textAlign: 'center',
                width: 250,
                padding: 10,
              }}
              // onChangeText={}
              // value={}
              placeholder={'Enter your user email address'}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Create my account!"
          onPress={() => null}
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
