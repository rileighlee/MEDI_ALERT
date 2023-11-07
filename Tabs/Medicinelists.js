import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const MedicineLists = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const categories = [
    'Allergy Care',
    'Body & Muscle Pain',
    "Children's Health",
    'Colds Medicines',
    'Cough Medicines',
    'Gut and Stomach Care',
    'Headache, Fever & Flu',
    'Prescription Drugs',
  ];

  const medicinesByCategory = {
    'Allergy Care': ['Allerta® Tablet', 'Alnix® Plus Tablet', 'Alnix® Tablet'],
    'Body & Muscle Pain': ['Alaxan® Tablet', 'Alaxan® FR Capsule', 'Dolfenal® 250mg', 'Dolfenal® 500mg', 'Medicol® Advance 200', 'Medicol® Advance 400', 'Muskelax®', 'Skelan® 220 mg', 'Skelan® 550 mg'],
    "Children's Health": ['Allerzet® Syrup', 'Alnix® Plus Syrup', 'Alnix® Syrup', 'Appebon® Kid', 'Bioflu® Suspension', 'Biogesic® For Kids', 'Ceelin®', 'Ceelin® Chewables', 'Ceelin® Plus', 'Ceelin® Plus Chewables', 'Disudrin®', 'Dolan® FP', 'e-Zinc®', 'Enervon® Syrup', 'Expel®', 'Expel® OD', 'Ferlin®', 'Flotera® Drops', 'Flotera® Tablet', 'Growee® Drops', 'Growee® Syrup', 'HydroAid®', 'Loraped®', 'Momecort®', 'NasoClear®', 'Neozep® Drops', 'Neozep® Syrup', 'Nutrilin® Oral Drops', 'Nutrilin® Syrup', 'Nutroplex®', 'Pambatang Solmux®', 'Rashfree™', 'Restime® Chewable Tablet', 'Restime® Drops', 'United Home® Ceetab Kids', 'United Home® Kiddilets Syrup', 'United Home® Kiddilets Tablet', 'United Home® SuperGrow Kids'],
    'Colds Medicines': ['Decolgen® Forte', 'Nafarin®-A', 'Neozep® Drops', 'Neozep® Forte', 'Neozep® Syrup® Non-Drowsy', 'No-Drowse Decolgen®', 'Solmux® Advance Suspension'],
    'Cough Medicines': ['Myracof® Tablet', 'Solmux® Advance', 'Solmux® Advance Suspension', 'Tuseran® Forte', 'Tuseran® Night'],
    'Gut and Stomach Care': ['Algina™', 'Diatabs®', 'Hydrite®', 'Hyos® Tablet', 'Kremil-S® Advance', 'Kremil-S® Tablet', 'Omepron® 20 mg Capsule', 'Smooth®', 'Surelax®', 'United Home® Glydolax', 'United Home® Lormide'],
    'Headache, Fever & Flu': ['Alaxan® Tablet', 'Alaxan® FR Capsule', 'Bioflu® Tablet', 'Biogesic®', 'Dolfenal® 500mg', 'Neozep® Forte', 'Rexidol® Forte', 'Tuseran® Forte', 'United Home® Dizitab', 'United Home® Fevertab'],
    'Prescription Drugs': ['Alendra®', 'Algesia®', 'Allerzet® Tablet', 'Amena™', 'Amiabel®', 'Amikacide®', 'Amlife®', 'AmoClav® Suspension', 'AmoClav® Tablet', 'Ampicin® Capsule', 'Ampimax® Tablet', 'Amvasc® BE', 'Amvasc® Plus', 'Anazole®', 'Andros®', 'Appebon® with Iron Capsule', 'Appebon® with Iron Syrup', 'Asmalin® Broncho', 'Asmalin® Inhaler', 'Asmalin® Solution for Nebulization', 'Asmalin® Syrup', 'Asmavent® Nebulizing Solution', 'Aspilets®', 'Aspilets®-EC', 'Atepros®', 'Axera®', 'Bactifree®', 'Bicapros®', 'Bifix™', 'Biovinate®', 'BPNorm®', 'Candez®', 'Candez® Plus', 'Cardepine®', 'Cardiosel®', 'Cardiosel® OD', 'Carvid®', 'Cefalin® Capsule', 'Cefalin® Powder for Suspension', 'Celabin™', 'Cholinerv®', 'Citagem®', 'Clonipress®', 'Combiflex® Lipid Central', 'Combiflex® Lipid Peri', 'Combizar®', 'Comprilex®', 'Coxid®', 'Dazomet®', 'Decilone® and Decilone® Forte', 'Decolsin®', 'Dioxel®', 'Docetax®', 'Dolfenal® 500mg', 'Dopezil®', 'Doxin®', 'Doxofix™', 'Drenex®', 'Duavent® Inhaler', 'Eczacort®', 'Esensamin™', 'Exflem® Granules', 'Exflem® Tablet'],
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index === selectedCategory ? null : index);
  };

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
    navigation.navigate('MedicineDetails', { medicine });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <View style={styles.logoBackground}>
          <Image source={require('../assets/medicine.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Medicine List</Text>
      </View>
      <View style={styles.lowerHalf}>
        {categories.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => handleCategoryClick(index)}
            style={styles.barContainer}
          >
            <View style={styles.barTitleContainer}>
              <Text style={styles.barTitle}>{category}</Text>
              <Text style={styles.downArrow}>
                {selectedCategory === index ? '▲' : '▼'}
              </Text>
            </View>
            {selectedCategory === index && (
              <View style={styles.medicineList}>
                {medicinesByCategory[category].map((medicine, medIndex) => (
                  <Pressable
                    key={medIndex}
                    onPress={() => handleMedicineClick(medicine)}
                    style={styles.medicineItem}
                  >
                    <Text style={styles.medicineText}>{medicine}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHalf: {
    height: screenHeight * 0.3,
    justifyContent: 'center',
    backgroundColor: '#F2ABFF',
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
    backgroundColor: '#FADEFF',
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#A3007F',
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
  medicineList: {
    marginVertical: 10,
  },
  medicineItem: {
    borderColor: '#ccc',
    padding: 6,
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  medicineText: {
    fontSize: 16,
  },
});

export default MedicineLists;
