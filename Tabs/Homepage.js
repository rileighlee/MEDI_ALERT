import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height: screenHeight } = Dimensions.get('window');

const HomePage = () => {
  const navigation = useNavigation('Signin');

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Assuming you have a 'navigation' object available, navigate to 'MedicineDetails'
    navigation.navigate('MedicineDetails', { searchText });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Text style={styles.smallText}>Welcome, John Doe</Text>
        <Text style={styles.bigText}>Finding a perfect medicine?</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search medicine ex. 'Biogesic'"
            onChangeText={setSearchText}
            value={searchText}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
            <Image source={require('C:/Users/makir/OneDrive/Desktop/MEDI_ALERT/assets/search.png')} style={styles.searchImage} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerHalf}>
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('MedicineDetails', { searchText: 'Medicine' })}
          >
            <Image source={require('C:/Users/makir/OneDrive/Desktop/MEDI_ALERT/assets/medicine.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>Medicine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('Vitamins')}
          >
            <Image source={require('C:/Users/makir/OneDrive/Desktop/MEDI_ALERT/assets/vitamins.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>Vitamins</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('MedicineComparer')}
          >
            <Image source={require('C:/Users/makir/OneDrive/Desktop/MEDI_ALERT/assets/comparing.png')} style={styles.iconImage} />
            <Text style={styles.iconText}>Medicine Comparer</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.calendarButton}
          onPress={() => {
            // Handle calendar button click
          }}
        >
          <Text style={styles.calendarText}>Calendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00F1C6',
  },
  upperHalf: {
    height: screenHeight * 0.4,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#6499E9',
    justifyContent: 'center',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40
  },
  lowerHalf: {
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 20,
  },
  smallText: {
    fontSize: 12,
    marginBottom: 10,
    position: 'relative',
    marginLeft: -200,
    color: 'white'
  },
  bigText: {
    fontSize: 40,
    marginBottom: 10,
    position: 'relative',
    color: 'white'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,

  },
  searchIcon: {
    padding: 10,
  },
  searchImage: {
    width: 20,
    height: 20,
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
  },
  calendarButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 20,
  },
  calendarText: {
    fontSize: 16,
  },
});

export default HomePage;


