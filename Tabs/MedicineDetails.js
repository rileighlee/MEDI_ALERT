import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const MedicineDetails = ({ route }) => {
  const { medicine } = route.params;

  const categories = [
    {
      title: 'Description',
      info: 'This is the description of the medicine.',
    },
    {
      title: 'Dosage and Frequency',
      info: 'Dosage and frequency information for the medicine.',
    },
    {
      title: 'Precautions',
      info: 'Precautionary measures for taking the medicine.',
    },
    {
      title: 'Overdosage of the medicine.',
      info: 'Information about overdosage of the medicine. \n -eating disorder',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <View style={styles.leftContent}>
          <Image source={require('../assets/human.png')} style={styles.humanImage} />
        </View>
        <View style={styles.rightContent}>
          <Image source={require('../assets/biogesic.jpg')} style={styles.medicineImage} />
          <Text style={styles.medicineName}>{medicine}</Text>
        </View>
      </View>
      <View style={styles.lowerHalf}>
        {categories.map((category, index) => (
          <Pressable
            key={index}
            style={styles.barContainer}
          >
            <View style={styles.barTitleContainer}>
              <Text style={styles.barTitle}>{category.title}</Text>
              <Text style={styles.downArrow}>▼</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>{category.info}</Text>
            </View>
          </Pressable>
        ))}
        <Text style={styles.consultDoctorText}>
          If symptoms persist, consult your doctor.
        </Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#89fff8',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  lowerHalf: {
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 20,
  },
  leftContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  humanImage: {
    position: 'relative',
    marginBottom: -100,
    marginLeft: -4,
    width: 170,
    height: 170,
    resizeMode: 'cover',
    
  },
  medicineImage: {
    marginRight: 50,
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  medicineName: {
    marginRight: 50,
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  barContainer: {
    marginBottom: 10,
    borderColor: '#ccc',
    padding: 6,
    borderRadius: 20,
    backgroundColor: 'white',
    fontStyle: 'italic',
  },
  barTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  barTitle: {
    fontSize: 16,
    fontWeight: 'italic',
    marginBottom: 5,
  },
  downArrow: {
    fontSize: 12,
  },
  infoContainer: {
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
  },
  consultDoctorText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
  },
});

export default MedicineDetails;
