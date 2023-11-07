import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Create Account</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
        />
        <TextInput
          placeholder="Date of Birth"
          style={styles.input}
        />
        <TextInput
          placeholder="Contact Number"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.signUpButton} onPress={handleSignUpPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 20,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  header: {
    alignItems: 'center',
    marginTop: -60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute'
  },
  form: {
    marginTop: 40,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  signUpButton: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
