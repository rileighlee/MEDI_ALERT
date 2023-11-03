import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const { height: screenHeight } = Dimensions.get('window');

const HomePage = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const fullName = route.params?.fullName;

  const [searchText, setSearchText] = useState('');
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateSelect = (day) => {
    const selectedDate = day.dateString;
    setSelectedDates((prevSelectedDates) => ({
      ...prevSelectedDates,
      [selectedDate]: {
        selected: !prevSelectedDates[selectedDate]?.selected,
      },
    }));
  };

  const handleSearch = () => {
    const searchLowerCase = searchText.toLowerCase();

    if (searchLowerCase.includes('vitamin')) {
      navigation.navigate('Vitamins');
    } else {
      navigation.navigate('MedicineDetails', { searchText });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Text style={styles.smallText}>Welcome {fullName}</Text>
        <Text style={styles.bigText}>Finding a perfect medicine?</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search medicine ex. 'Biogesic'"
            onChangeText={setSearchText}
            value={searchText}
          />
          <Pressable onPress={handleSearch} style={styles.searchIcon}>
            <Image source={require('../assets/search.png')} style={styles.searchImage} />
          </Pressable>
        </View>
      </View>
      <View style={styles.lowerHalf}>
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.iconContainer}>
          <View style={styles.circleBackground}>
            <Pressable
              style={styles.icon}
              onPress={() => navigation.navigate('MedicineDetails', { searchText: 'Medicine' })}
            >
              <Image source={require('../assets/medicine.png')} style={styles.iconImage} />
            </Pressable>
          </View>
          <View style={styles.circleBackground}>
            <Pressable
              style={styles.icon}
              onPress={() => navigation.navigate('Vitamins')}
            >
              <Image source={require('../assets/vitamins.png')} style={styles.iconImage} />
            </Pressable>
          </View>
          <View style={styles.circleBackground}>
            <Pressable
              style={styles.icon}
              onPress={() => navigation.navigate('MedicineComparer')}
            >
              <Image source={require('../assets/comparing.png')} style={styles.iconImage} />
            </Pressable>
          </View>
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            markedDates={selectedDates}
            onDayPress={handleDateSelect}
            theme={{
              calendarBackground: '#D0D4CA',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9F5FF',
  },
  upperHalf: {
    height: screenHeight * 0.4,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#6499E9',
    justifyContent: 'center',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  lowerHalf: {
    flex: 1,
    paddingHorizontal: 20,
  },
  smallText: {
    fontSize: 12,
    marginBottom: 10,
    position: 'relative',
    marginLeft: -200,
    color: 'white',
  },
  bigText: {
    fontSize: 40,
    marginBottom: 10,
    position: 'relative',
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 4,
  },
  searchInput: {
    flex: 10,
    fontSize: 16,
    paddingVertical: 5,
  },
  searchIcon: {
    padding: 10,
  },
  searchImage: {
    width: 20,
    height: 20,
  },
  calendarContainer: {
    marginTop: 20,
    aspectRatio: 1,
    overflow: 'scroll',
    borderRadius: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Add space between the circles
    marginTop: 20,
  },
  circleBackground: {
    backgroundColor: 'white',
    borderRadius: 50, // Adjust the size of the circle
    padding: 5,
  },
  icon: {
    alignItems: 'center',
  },
  iconImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default HomePage;
