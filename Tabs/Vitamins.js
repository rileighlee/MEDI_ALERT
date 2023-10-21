import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const Vitamins = () => {
  const [selectedBubble, setSelectedBubble] = useState(null);

  const bubbleData = [
    { title: 'A', description: 'Description for A', image: require('../assets/A.png') },
    { title: 'B1', description: 'Description for B1', image: require('../assets/B1.png') },
    { title: 'B2', description: 'Description for B2', image: require('../assets/B2.png') },
    { title: 'B3', description: 'Description for B3', image: require('../assets/B3.png') },
    { title: 'B6', description: 'Description for B6', image: require('../assets/B6.png') },
    { title: 'B7', description: 'Description for B7', image: require('../assets/B7.png') },
    { title: 'B9', description: 'Description for B9', image: require('../assets/B9.png') },
    { title: 'B12', description: 'Description for B12', image: require('../assets/B12.png') },
    { title: 'C', description: 'Description for C', image: require('../assets/C.png') },
    { title: 'D', description: 'Description for D', image: require('../assets/D.png') },
    { title: 'E', description: 'Description for E', image: require('../assets/E.png') },
    { title: 'K', description: 'Description for K', image: require('../assets/K.png') },
    // Add more bubble data for B, C, D, E, K, B1, B2, B3, B6, B7, B9
  ];

  const handleBubbleClick = (index) => {
    setSelectedBubble(index === selectedBubble ? null : index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        {/* Upper half content */}
        <Image source={require('C:/Users/makir/OneDrive/Desktop/MEDI_ALERT/assets/vitamins.png')} style={styles.vitaminsImage} />
        <Text style={styles.title}>Vitamins Cheat Sheet</Text>
        <TouchableOpacity style={styles.backIconContainer}>
          <View style={styles.backIconCircle}>
            <Image source={require('C:/Users/makir/OneDrive/Desktop/MEDI_ALERT/assets/backicon.png')} style={styles.backIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.lowerHalf}>
        {/* Lower half content */}
        {bubbleData.map((bubble, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleBubbleClick(index)}
            style={[styles.bubbleContainer, { backgroundColor: selectedBubble === index ? '#89fff8' : 'white' }]}
          >
            <Text style={styles.bubbleTitle}>{bubble.title}</Text>
            {selectedBubble === index && (
              <View style={styles.bubbleContent}>
                <View style={styles.descriptionCube}>
                  <Text style={styles.bubbleDescription}>{bubble.description}</Text>
                  <Image source={require('C:/Users/makir/OneDrive/Desktop/MEDI_ALERT/assets/human2.png')} style={styles.human2Image} />
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDF8E',
  },
  upperHalf: {
    height: screenHeight * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3ff6b',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
  },
  vitaminsImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5959',
  },
  backIconContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  lowerHalf: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',  // Adjusted justify content
    paddingHorizontal: 10,  // Added padding for spacingpadding for spacing
  },
  bubbleContainer: {
    width: '20%',  // Adjusted width to fit 3 bubbles per row
    aspectRatio: 1,
    borderRadius: 100,
    marginVertical: 5,
    marginLeft: '5%',
    marginRight: '5%',
    //marginBottom: 20,  // Adjusted margin for vertical spacing
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF5959',
  },
  bubbleContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,  // Adjusted margin for vertical spacing
  },
// Adjusted styles for the bubble image
  bubbleImage: {
    width: 5000,  // Adjusted width
    height: 5000,  // Adjusted height
    resizeMode: "center",  // Maintain the aspect ratio
  },
  human2Image: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  bubbleDescription: {
    fontSize: 14,
  },
  descriptionCube: {
    backgroundColor: '#F2FFCD',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Vitamins;
