import React from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleHomePage = () => {
    navigation.navigate('HomePage');
  };

  const handleSignUpPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          // Add onChangeText to handle email input
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          // Add onChangeText to handle password input
        />
        <Pressable style={styles.loginButton} onPress={handleHomePage}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </Pressable>
      </View>
      <View style={styles.divider}>
        <Text style={styles.dividerText}>────────── or ──────────</Text>
      </View>
      <Pressable style={styles.signUp} onPress={handleSignUpPress}>
        <Text style={styles.signUpText}>Don't have an account? <Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text></Text>
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
    marginTop: -150,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'roboto',
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
  },
  loginButton: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
  },
  divider: {
    alignItems: 'center',
    marginTop: 20,
  },
  dividerText: {
    fontSize: 20,
    color: 'black',
  },
  signUp: {
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 16,
    color: 'white',
  },
});

export default LoginScreen;