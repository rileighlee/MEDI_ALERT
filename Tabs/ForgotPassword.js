import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  const handleResetPassword = () => {
    // Add validation logic before updating the password
    if (email && newPassword === confirmPassword) {
      // Implement logic to update the password in your backend
      // For simplicity, let's just navigate back to the login screen.
      navigation.navigate('Login');
    } else {
      // Handle missing email or password mismatch error
      // You can display an error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.subtitle}>
          Enter your email, new password and confirm it.
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="New Password"
          style={styles.input}
          secureTextEntry={true}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Pressable style={styles.resetButton} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </Pressable>
        <Pressable style={styles.backToLogin} onPress={handleBackToLogin}>
          <Text style={styles.backToLoginText}>Back to Login</Text>
        </Pressable>
      </View>
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
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black', // Change text color to black
    },
    form: {},
    subtitle: {
      fontSize: 16,
      color: 'black',
      marginBottom: 20,
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      marginBottom: 15,
    },
    resetButton: {
      backgroundColor: 'lightblue',
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    backToLogin: {
      alignItems: 'center',
      marginTop: 10,
    },
    backToLoginText: {
      fontSize: 16,
      color: 'white',
      textDecorationLine: 'underline',
    },
  });

export default ForgotPassword;
