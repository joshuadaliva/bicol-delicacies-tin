import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BicolExpressDetails = ({ onBack }) => {
  return (
    <View style={styles.detailsContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.detailsTitle}>Bicol Express</Text>
      <Text style={styles.detailsDescription}>
        Bicol Express is a spicy Filipino dish made from pork, coconut milk, and chili peppers.
      </Text>
      <Text style={styles.detailsIngredientsTitle}>Ingredients:</Text>
      <Text style={styles.detailsIngredients}>
        - Pork belly{'\n'}
        - Coconut milk{'\n'}
        - Chili peppers{'\n'}
        - Shrimp paste{'\n'}
        - Onion{'\n'}
        - Garlic
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  detailsTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  detailsDescription: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 30,
    color: 'black',
  },
  detailsIngredientsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
  },
  detailsIngredients: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    marginHorizontal: 30,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default BicolExpressDetails;
