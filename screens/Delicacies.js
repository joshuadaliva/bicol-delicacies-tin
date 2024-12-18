import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BicolExpressDetails from './BicolExpressDetails'; // Import BicolExpressDetails screen

const Delicacies = ({ navigation }) => {
  const [selectedDelicacy, setSelectedDelicacy] = useState(null);

  const handleDelicacySelect = (delicacy) => {
    if (delicacy === 'Bicol Express') {
      setSelectedDelicacy('Bicol Express');
    }
  };

  const renderContent = () => {
    if (selectedDelicacy) {
      return <BicolExpressDetails onBack={() => setSelectedDelicacy(null)} />;
    }

    const delicacies = [
      'Bicol Express',
      'Laing',
      'Pinangat',
      'Kinalas',
      'Pancit Bato',
      'Ginataang Santol',
    ];

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Delicacies</Text>

        <View style={styles.delicaciesContainer}>
          {delicacies.map((food, index) => (
            <TouchableOpacity
              key={index}
              style={styles.foodButton}
              onPress={() => handleDelicacySelect(food)}
            >
              <Text style={styles.foodButtonText}>{food}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return renderContent(); // Render the appropriate content based on selected delicacy
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  foodButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  foodButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  delicaciesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Delicacies;
