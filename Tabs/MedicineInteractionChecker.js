import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const MedicineInteractionChecker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <View style={styles.logoBackground}>
          <Image source={require('../assets/comparing.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Medicine Interaction Checker</Text>
      </View>
      <View style={styles.lowerHalf}>
        {/* Add your components for the lower half here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA0D2',
  },
  upperHalf: {
    height: screenHeight * 0.3,
    justifyContent: 'center',
    backgroundColor: '#FFC8E5',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  logoBackground: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  lowerHalf: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFA0D2',
  },
});

export default MedicineInteractionChecker;
